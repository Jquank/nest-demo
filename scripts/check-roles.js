const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const roles = await p.role.findMany({
    include: { users: { select: { username: true } } },
  });
  for (const role of roles) {
    const perms = role.permissions || [];
    const menus = perms.filter((p) => p.startsWith('menu:'));
    console.log('角色:', role.name);
    console.log('  用户:', role.users.map((u) => u.username).join(', '));
    console.log('  菜单:', menus);
    console.log('');
  }
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
