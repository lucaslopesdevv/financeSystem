import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function createFinanceRoute(app: FastifyInstance) {
  app.post("/createFinance", async (req, res) => {
    const bodySchema = z.object({
      nameOfBusiness: z.string(),
      valueOfFinance: z.string(),
      recurrence: z.string(),
      status: z.string(),
    });

    if (!req.body) {
      res.status(400).send({
        error: "Por gentileza inserir as informações",
      });
      return;
    }

    try {
      const { nameOfBusiness, valueOfFinance, recurrence, status } =
        bodySchema.parse(req.body);

      const finance = await prisma.finance.create({
        data: {
          nameOfBusiness,
          valueOfFinance,
          recurrence,
          status,
        },
      });

      res.send("Finança inserido com sucesso");
    } catch (error) {
      console.error("Erro ao criar finança:", error);
      res.status(500).send({
        error: "Erro ao criar finança",
      });
    }
  });
}
