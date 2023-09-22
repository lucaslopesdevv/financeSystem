import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getAllFinanceRoute(app: FastifyInstance) {
  app.get("/finances", async () => {
    const finances = await prisma.finance.findMany();
    return finances;
  });
}
