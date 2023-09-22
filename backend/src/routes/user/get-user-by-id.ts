import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function getUserByIdRoute(app: FastifyInstance) {
  app.get("/user/:userId", async (req, res) => {
    const paramsSchema = z.object({
      userId: z.string().uuid(),
    });

    const { userId } = paramsSchema.parse(req.params);

    try {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: userId,
        },
      });

      return res.send({ success: user });
    } catch (err) {
      return res.send({ error: "erro ao consultar" });
    }
  });
}
