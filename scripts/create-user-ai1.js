const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const p = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);
  const userRole = await p.role.findFirst({ where: { name: 'user' } });

  const existing = await p.user.findUnique({ where: { username: 'ai1' } });
  if (existing) {
    console.log('用户 ai1 已存在，跳过');
    await p.$disconnect();
    return;
  }

  await p.user.create({
    data: {
      username: 'ai1',
      password,
      roles: userRole ? { connect: [{ id: userRole.id }] } : undefined,
    },
  });

  console.log('用户 ai1 创建成功，密码 123456');
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
