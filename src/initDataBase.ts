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
          permissions: ['menu:home', 'menu:role-manage'],
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

async function main() {
  await initRoleAndUser();
  await initboard();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect().catch((e) => console.error('Disconnect error:', e));
  });
