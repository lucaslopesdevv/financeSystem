import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { UsersController } from "../../controllers/user/UsersController";

const usersController = new UsersController();

export async function createUserRoute(app: FastifyInstance) {
  app.post("/createUser", usersController.create);
  // => {
  //   const bodySchema = z.object({
  //     username: z.string().min(1).max(20),
  //     email: z.string(),
  //     password: z.string(),
  //   });

  //   if (!req.body) {
  //     res.status(400).send({
  //       error: "Por gentileza informar os dados do novo usuário",
  //     });
  //     return;
  //   }

  //   try {
  //     const { username, email, password } = bodySchema.parse(req.body);

  //     const user = await prisma.user.create({
  //       data: {
  //         username,
  //         email,
  //         password,
  //       },
  //     });

  //     res.send("Usuário inserido com sucesso");
  //   } catch (error) {
  //     console.error("Erro ao criar usuário:", error);
  //     res.status(500).send({
  //       error: "Erro ao criar usuário",
  //     });
  //   }
  // });
}
