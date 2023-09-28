import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { UsersController } from "../../controllers/user/UsersController";

const usersController = new UsersController();

export async function getAllUsersRoute(app: FastifyInstance) {
  app.get("/users", usersController.show);
}
