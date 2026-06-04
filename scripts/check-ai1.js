const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const user = await p.user.findUnique({
    where: { username: 'ai1' },
    include: { roles: true },
  });
  console.log('用户:', user.username);
  console.log('角色:');
  for (const role of user.roles) {
    console.log(' -', role.name, '权限:', JSON.stringify(role.permissions));
  }
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
