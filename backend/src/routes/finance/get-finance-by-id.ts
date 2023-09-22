import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function getFinanceByIdRoute(app: FastifyInstance) {
  app.get("/finance/:financeId", async (req, res) => {
    const paramsSchema = z.object({
      financeId: z.string().uuid(),
    });

    const { financeId } = paramsSchema.parse(req.params);

    try {
      const finance = await prisma.finance.findUniqueOrThrow({
        where: {
          id: financeId,
        },
      });

      return res.send({ success: finance });
    } catch (err) {
      return res.send({ error: "erro ao consultar" });
    }
  });
}
