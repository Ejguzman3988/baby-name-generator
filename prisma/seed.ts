const { PrismaClient } = require("@prisma/client");
const { getBabyNamesData } = require("./seedUtil/utils");

const prisma = new PrismaClient();
async function main() {
  const babyNamesData = await getBabyNamesData();

  for (const babyNameArr of babyNamesData[0]) {
    const babyName = babyNameArr[0];
    const gender = babyNameArr[1];
    const count = babyNameArr[2];
    const yearStr = babyNameArr[3];

    const baby = await prisma.babyName.upsert({
      where: {
        name: babyName,
        gender: gender,
      },
      create: {
        name: babyName,
        gender: gender,
      },
    });
    const year = await prisma.year.upsert({
      where: {
        year: parseInt(yearStr),
      },
      create: {
        year: parseInt(yearStr),
      },
    });

    const yearlyCount = await prisma.yearlyCount.upsert({
      create: {
        yearId: year[0].id,
        babyId: baby[0].id,
        count: count,
      },
    });

    console.log({ yearlyCount });
  }

  // const alice = await prisma.user.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })
  // console.log({ alice, bob })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
