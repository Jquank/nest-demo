#!/bin/bash
# ============================================================
# 阿里云 ECS 一键环境安装脚本
# 适用系统：Alibaba Cloud Linux 3 / CentOS 8+
# 用法：bash setup-server.sh
# ============================================================
set -e

echo "=========================================="
echo " 1/6 更新系统 + 安装基础工具"
echo "=========================================="
sudo dnf update -y
sudo dnf install -y git curl wget vim tar unzip

echo ""
echo "=========================================="
echo " 2/6 安装 Node.js 20 LTS"
echo "=========================================="
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs
node -v
npm -v

echo ""
echo "=========================================="
echo " 3/6 安装 pnpm + pm2（全局）"
echo "=========================================="
sudo npm install -g pnpm pm2
pnpm -v
pm2 -v

echo ""
echo "=========================================="
echo " 4/6 安装 MySQL 8.0"
echo "=========================================="
sudo dnf install -y mysql-server
sudo systemctl enable mysqld
sudo systemctl start mysqld

echo ""
echo "=========================================="
echo " 5/6 安装 Nginx"
echo "=========================================="
sudo dnf install -y nginx
sudo systemctl enable nginx

echo ""
echo "=========================================="
echo " 6/6 配置防火墙（开放 80、443 端口）"
echo "=========================================="
sudo firewall-cmd --permanent --add-service=http 2>/dev/null || true
sudo firewall-cmd --permanent --add-service=https 2>/dev/null || true
sudo firewall-cmd --reload 2>/dev/null || true

echo ""
echo "=========================================="
echo " ✅ 环境安装完成！"
echo "=========================================="
echo ""
echo "📌 下一步操作："
echo " 1. 初始化 MySQL："
echo "    sudo mysql_secure_installation"
echo ""
echo " 2. 创建数据库："
echo "    mysql -u root -p"
echo "    CREATE DATABASE nest_demo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo "    CREATE USER 'nest'@'localhost' IDENTIFIED BY '你的密码';"
echo "    GRANT ALL PRIVILEGES ON nest_demo.* TO 'nest'@'localhost';"
echo "    FLUSH PRIVILEGES;"
echo ""
echo " 3. 把项目代码传到服务器 /home 下"
echo " 4. 参考 DEPLOY.md 完成部署"
