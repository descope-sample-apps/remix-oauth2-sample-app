import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [
        {
          name: "Jane Doe",
          email: "jane@doe.com",
        },
        {
          name: "Bob Smith",
          email: "bob@smit.com",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
