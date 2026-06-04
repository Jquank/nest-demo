const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  // 1. 创建或更新 AI1 角色权限
  let aiRole = await p.role.findFirst({ where: { name: 'AI1' } });
  if (!aiRole) {
    aiRole = await p.role.create({
      data: {
        name: 'AI1',
        permissions: [
          'menu:home',
          'menu:hotspot-browse',
          'menu:hotspot-generate',
          'menu:hotspot-edit',
        ],
      },
    });
    console.log('已创建角色 AI1');
  } else {
    // 更新权限
    aiRole = await p.role.update({
      where: { id: aiRole.id },
      data: {
        permissions: [
          'menu:home',
          'menu:hotspot-browse',
          'menu:hotspot-generate',
          'menu:hotspot-edit',
        ],
      },
    });
    console.log('已更新角色 AI1 权限');
  }

  // 2. 将 ai1 用户绑定到 AI1 角色
  const user = await p.user.findUnique({ where: { username: 'ai1' } });
  if (!user) {
    console.log('用户 ai1 不存在');
    await p.$disconnect();
    return;
  }

  await p.user.update({
    where: { id: user.id },
    data: {
      roles: { set: [{ id: aiRole.id }] },
    },
  });

  console.log('已将 ai1 角色绑定为 AI1，权限:', [
    'menu:home',
    'menu:hotspot-browse',
    'menu:hotspot-generate',
    'menu:hotspot-edit',
  ]);
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
