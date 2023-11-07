import { PrismaClient } from '@prisma/client';
import { logs } from './seederLogs';

const prisma = new PrismaClient();

async function main() {
  for (let log of logs) {
    await prisma.logs.create({
      data: log,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
