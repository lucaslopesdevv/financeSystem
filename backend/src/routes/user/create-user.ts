import { FastifyInstance } from "fastify";
import { UsersController } from "../../controllers/user/UsersController";

const usersController = new UsersController();

export async function createUserRoute(app: FastifyInstance) {
  app.post("/createUser", usersController.create);
}
