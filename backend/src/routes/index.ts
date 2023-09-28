import { FastifyInstance, fastify } from "fastify";
import { getAllUsersRoute } from "./user/get-all-users";
import { createUserRoute } from "./user/create-user";
import { createFinanceRoute } from "./finance/create-finance";
import { getAllFinanceRoute } from "./finance/get-all-finance";
import { getFinanceByIdRoute } from "./finance/get-finance-by-id";
import { getUserByIdRoute } from "./user/get-user-by-id";
import { updateUserRoute } from "./user/update-user";

const app = fastify();

export async function Routes(app: FastifyInstance) {
  app.register(getAllUsersRoute);
  app.register(createUserRoute);
  app.register(createFinanceRoute);
  app.register(getAllFinanceRoute);

  app.register(getFinanceByIdRoute);
  app.register(getUserByIdRoute);

  app.register(updateUserRoute);
}
