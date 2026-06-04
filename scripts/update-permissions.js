const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const adminRole = await p.role.findFirst({ where: { name: 'admin' } });
  if (!adminRole) {
    console.log('admin 角色不存在，跳过');
    return;
  }

  const currentPermissions = adminRole.permissions || [];
  console.log('当前权限:', currentPermissions);

  const needed = [
    'menu:hotspot-browse',
    'menu:hotspot-generate',
    'menu:hotspot-edit',
    'menu:hotspot-manage',
  ];
  const updated = [...new Set([...currentPermissions, ...needed])];

  await p.role.update({
    where: { id: adminRole.id },
    data: { permissions: updated },
  });

  console.log('已更新 admin 权限:', updated);
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
