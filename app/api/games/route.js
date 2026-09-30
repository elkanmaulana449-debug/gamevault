import prisma from "../../lib/prisma";

export async function GET() {
  const games = await prisma.game.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return Response.json(games);
}