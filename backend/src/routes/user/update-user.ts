import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function updateUserRoute(app: FastifyInstance) {
  app.put("/user/:userId/update", async (req, res) => {
    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    const paramsSchema = z.object({
      userId: z.string(),
    });

    if (!req.body) {
      res.status(400).send({
        error: "Por gentileza informar os dados do novo usuário",
      });
      return;
    }

    try {
      const { email, password } = bodySchema.parse(req.body);
      const { userId } = paramsSchema.parse(req.params);

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          email,
          password,
        },
      });

      res.send("Dados do usuário alterado com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).send({
        error: "Erro ao atualizar usuário",
      });
    }
  });
}
