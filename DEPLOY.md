# 🚀 新手上线指南 — 从零到网站上线

## 准备工作

| 你需要的东西  | 说明                                              |
| ------------- | ------------------------------------------------- |
| 服务器公网 IP | 阿里云控制台 → ECS 实例列表 → 复制公网 IP         |
| SSH 客户端    | Windows 开 PowerShell 就有 `ssh`，或者用 Git Bash |
| root 密码     | 购买时设置的，或者控制台"重置实例密码"            |

---

## 第一步：连接到服务器

打开 PowerShell（Win+X → 终端），输入：

```bash
ssh root@你的公网IP
```

首次连接会问 `Are you sure you want to continue connecting?`，输入 `yes` 回车。然后输入密码（输入时不显示是正常的）。

> 💡 **连不上？** 去阿里云控制台 → 安全组 → 添加规则：端口 `22`、授权对象 `0.0.0.0/0`。

---

## 第二步：一键安装环境

连上服务器后，复制粘贴运行：

```bash
bash <(cat << 'SETUP_EOF'
# 更新系统
dnf update -y
dnf install -y git curl wget vim tar unzip

# Node.js 20
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf install -y nodejs

# pnpm + pm2
npm install -g pnpm pm2

# MySQL 8.0
dnf install -y mysql-server
systemctl enable mysqld
systemctl start mysqld

# Nginx
dnf install -y nginx
systemctl enable nginx

# 创建目录
mkdir -p /home/logs /home/nest-demo
chmod 755 /home /home/logs /home/nest-demo

echo "✅ 环境安装完成"
node -v && pnpm -v && pm2 -v
SETUP_EOF
)
```

---

## 第三步：配置 MySQL

### 3.1 安全初始化

```bash
mysql_secure_installation
```

按提示操作：

| 问题                          | 回答                  |
| ----------------------------- | --------------------- |
| 是否设置 VALIDATE PASSWORD？  | `N`（个人项目不折腾） |
| 更改 root 密码？              | 不改就输入当前密码    |
| Remove anonymous users?       | `Y`                   |
| Disallow root login remotely? | `Y`                   |
| Remove test database?         | `Y`                   |
| Reload privilege tables?      | `Y`                   |

### 3.2 创建项目数据库

```bash
mysql -u root -p
```

进去后依次执行（把 `你的密码` 替换掉）：

```sql
CREATE DATABASE nest_demo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'nest'@'localhost' IDENTIFIED BY '你的密码';

GRANT ALL PRIVILEGES ON nest_demo.* TO 'nest'@'localhost';

FLUSH PRIVILEGES;

exit;
```

---

## 第四步：上传项目代码

**在你的 Windows 电脑上**操作（开一个新 PowerShell 窗口，不是服务器）：

```bash
# 1. 先构建前端
cd d:\code\rise\web
npm run build

# 2. 打包后端（排除 node_modules 和 .git）
cd d:\code\rise\nest-demo
# PowerShell 用 7-Zip 或 WinRAR 右键压缩更方便
# 命令行用 Compress-Archive（但需要先装 7z）
# 最简单：用 WinSCP 或直接拖拽上传，跳过 tar

# 3. 上传后端到服务器（用 scp）
scp -r D:\code\rise\nest-demo root@你的IP:/home/nest-demo-src

# 4. 上传前端到服务器
scp -r D:\code\rise\web\dist root@你的IP:/home/web-dist
```

> 💡 **如果 scp 报错**：下载 [WinSCP](https://winscp.net/) 图形化工具，左边选本地 `nest-demo` 文件夹，右边填服务器 IP + root 密码，拖过去即可，对新手最友好。

---

## 第五步：在服务器上部署后端

回到服务器的 SSH 窗口：

```bash
# 1. 移动项目文件到正式目录
mv /home/nest-demo-src /home/nest-demo
cd /home/nest-demo

# 2. 创建 .env 配置文件
cat > .env << 'ENV_EOF'
DATABASE_URL="mysql://nest:你的密码@127.0.0.1:3306/nest_demo"
JWT_SECRET="nest-demo-production-2026"
PORT=3000
ENV_EOF

# 3. 安装依赖 + 构建
pnpm install
npx prisma generate
npx prisma migrate deploy   # 执行数据库迁移
pnpm run build               # 编译 TypeScript

# 4. 初始化数据（创建 admin 账号 + 初始权限）
npx ts-node ./src/initDataBase.ts

# 5. 创建上传目录
mkdir -p /home/nest-demo/uploads/hotspot
mkdir -p /home/nest-demo/uploads/ai-images

# 6. 用 PM2 启动
pm2 start /home/nest-demo/ecosystem.config.cjs
pm2 save
pm2 startup  # 设置开机自启（按提示执行输出的命令）
```

---

## 第六步：配置 Nginx + 前端

```bash
# 1. 建前端目录并移入
mkdir -p /home/nest-demo/web-dist
cp -r /home/web-dist/* /home/nest-demo/web-dist/

# 2. 配置 Nginx
cp /home/nest-demo/deploy/nginx.conf /etc/nginx/conf.d/nest-demo.conf

# 3. 测试配置
nginx -t

# 4. 启动 Nginx
systemctl start nginx
systemctl reload nginx
```

---

## 第七步：安全组开放端口

阿里云控制台 → 安全组 → 配置规则 → 添加：

| 端口 | 协议 | 授权对象  | 说明                      |
| ---- | ---- | --------- | ------------------------- |
| 80   | TCP  | 0.0.0.0/0 | HTTP                      |
| 443  | TCP  | 0.0.0.0/0 | HTTPS（暂时不用也先开着） |

---

## 第八步：验证

浏览器打开 `http://你的公网IP`，应该能看到登录页。

### 默认账号

- 用户名：**admin**
- 密码：**123456**

### 检查后端

```bash
pm2 status          # 看 nest-demo 是否 running
pm2 logs nest-demo  # 查看日志
curl http://127.0.0.1:3000/api  # 应该返回 Swagger JSON
```

---

## 常用运维命令

```bash
pm2 status                    # 查看所有进程
pm2 logs nest-demo            # 查看实时日志
pm2 restart nest-demo         # 重启后端
pm2 stop nest-demo            # 停止后端

systemctl status nginx        # Nginx 状态
systemctl restart nginx       # 重启 Nginx
sudo nginx -t && sudo systemctl reload nginx  # 修改配置后重载

# 数据库备份
mysqldump -u nest -p nest_demo > ~/backup_$(date +%Y%m%d).sql
```

---

## 后续升级（更新代码时）

```bash
# 在本机
cd d:\code\rise\web && npm run build
scp -r d:\code\rise\web\dist root@你的IP:/home/web-dist-new

# 在服务器
pm2 stop nest-demo
cd /home/nest-demo && git pull  # 或用 scp 再传
pnpm install && npx prisma generate && pnpm run build
pm2 start nest-demo
# 更新前端
rm -rf /home/nest-demo/web-dist && mv /home/web-dist-new /home/nest-demo/web-dist
systemctl reload nginx
```
