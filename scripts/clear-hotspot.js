const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const r1 = await p.hotspot.deleteMany();
  console.log('已清空 hotspot 表:', r1.count, '条');
  const r2 = await p.category.deleteMany();
  console.log('已清空 category 表:', r2.count, '条');
  await p.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
