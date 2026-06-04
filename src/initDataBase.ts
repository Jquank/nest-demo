import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { SaltOrRounds } from './common/constants';
const prisma = new PrismaClient();

/** 初始化 角色admin和用户admin */
async function initRoleAndUser() {
  if ((await prisma.role.count()) === 0) {
    await prisma.role.createMany({
      data: [
        {
          name: 'admin',
          permissions: [
            'menu:home',
            'menu:role-manage',
            'menu:system-manage',
            'menu:hotspot-manage',
            'menu:hotspot-browse',
            'menu:hotspot-generate',
            'menu:hotspot-edit',
          ],
        },
        {
          name: 'user',
          permissions: ['menu:home', 'menu:hotspot-browse'],
        },
      ],
    });
  }
  if ((await prisma.user.count()) === 0) {
    const adminPassword = await bcrypt.hash('123456', SaltOrRounds);
    const adminRole = await prisma.role.findUnique({
      where: { name: 'admin' },
    });
    await prisma.user.create({
      data: {
        username: 'admin',
        password: adminPassword,
        roles: {
          connect: [{ id: adminRole?.id }],
        },
      },
    });
  }
}

async function initboard() {
  if ((await prisma.board.count()) === 0) {
    await prisma.board.createMany({
      data: [
        {
          title: '看板1111111111111',
          desc: '看板1111111111111',
        },
        {
          title: '看板222222222222222222222222222',
          desc: '看板222222222222222222222222222',
        },
      ],
    });
  }
}

async function initCategories() {
  // 清理旧分类（AI、科技、财经 合并/移除）
  const oldNames = ['AI', '科技', '财经', '体育'];
  for (const name of oldNames) {
    const cat = await prisma.category.findFirst({ where: { name } });
    if (cat) {
      await prisma.hotspot.deleteMany({ where: { categoryId: cat.id } });
      await prisma.category.delete({ where: { id: cat.id } });
      console.log(`已删除旧分类"${name}"及其关联热点`);
    }
  }

  // 确保4个新分类存在
  const newCategories = [
    { name: '娱乐', sortOrder: 1 },
    { name: '科技AI', sortOrder: 2 },
    { name: '情感', sortOrder: 3 },
    { name: '社会', sortOrder: 4 },
  ];

  for (const nc of newCategories) {
    const existing = await prisma.category.findFirst({
      where: { name: nc.name },
    });
    if (!existing) {
      await prisma.category.create({ data: nc });
      console.log(`已创建分类"${nc.name}"`);
    }
  }

  console.log('分类初始化完成');
}

async function main() {
  await initRoleAndUser();
  await initboard();
  await initCategories();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect().catch((e) => console.error('Disconnect error:', e));
  });
