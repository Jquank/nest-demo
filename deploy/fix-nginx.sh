#!/bin/bash
# 一键修复 Nginx
set -e

# 1. 确认前端文件在 nginx 默认目录
if [ ! -f /usr/share/nginx/html/index.html ]; then
  cp -r /home/web-dist/* /usr/share/nginx/html/
  chmod -R 755 /usr/share/nginx/html
fi

# 2. 写 nginx 主配置（只包含 conf.d，没有默认 server 块）
cat > /etc/nginx/nginx.conf << 'MAIN'
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/*.conf;
events { worker_connections 1024; }
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    include /etc/nginx/conf.d/*.conf;
}
MAIN

# 3. 写站点配置
cat > /etc/nginx/conf.d/nest-demo.conf << 'SITE'
server {
    listen 80 default_server;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /board/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
    }

    location /uploads/ {
        alias /home/nest-demo/uploads/;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
SITE

# 4. 清理其他 conf.d 文件
rm -f /etc/nginx/conf.d/*.bak /etc/nginx/conf.d/*.bak2

# 5. 测试并重启
nginx -t
systemctl restart nginx

# 6. 验证
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:80/
echo ""
echo "=== FIX DONE ==="
