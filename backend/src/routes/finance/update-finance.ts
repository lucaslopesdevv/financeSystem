import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function updateUserRoute(app: FastifyInstance) {
  app.put("/finance/:financeId/update", async (req, res) => {
    const bodySchema = z.object({
      nameOfBusiness: z.string(),
      valueOfFinance: z.string(),
      recurrence: z.string(),
      status: z.string(),
    });

    const paramsSchema = z.object({
      financeId: z.string(),
    });

    if (!req.body) {
      res.status(400).send({
        error: "Por gentileza informar os dados da conta em questão",
      });
      return;
    }

    try {
      const { nameOfBusiness, valueOfFinance, recurrence, status } =
        bodySchema.parse(req.body);
      const { financeId } = paramsSchema.parse(req.params);

      await prisma.finance.update({
        where: {
          id: financeId,
        },
        data: {
          nameOfBusiness,
          valueOfFinance,
          recurrence,
          status,
        },
      });

      res.send("Dados da conta atualizado");
    } catch (error) {
      console.error("Erro ao atualizar dados da conta:", error);
      res.status(500).send({
        error: "Erro ao atualizar dados da conta",
      });
    }
  });
}
