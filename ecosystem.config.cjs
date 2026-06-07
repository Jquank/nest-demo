// ============================================================
// PM2 进程管理配置
// 用法：pm2 start ecosystem.config.cjs
// ============================================================
module.exports = {
  apps: [
    {
      name: 'nest-demo',
      script: './dist/main.js',
      cwd: '/home/nest-demo',
      // 用 fork 模式跑 NestJS（commonjs 模块）
      exec_mode: 'fork',
      instances: 1,
      // 环境变量（服务器上另有完整版含 API Key，部署时不要上传此文件覆盖服务器版本）
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // 自动重启配置
      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
      // 日志
      error_file: '/home/logs/nest-demo-error.log',
      out_file: '/home/logs/nest-demo-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // 内存限制（超过 400MB 自动重启）
      max_memory_restart: '400M',
      // 监听文件变化
      watch: false,
    },
  ],
};
