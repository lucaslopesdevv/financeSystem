import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { createUserRoute } from "./routes/user/create-user";
import { getAllUsersRoute } from "./routes/user/get-all-users";
import { createFinanceRoute } from "./routes/finance/create-finance";
import { getAllFinanceRoute } from "./routes/finance/get-all-finance";
import { getFinanceByIdRoute } from "./routes/finance/get-finance-by-id";
import { getUserByIdRoute } from "./routes/user/get-user-by-id";
import { updateUserRoute } from "./routes/user/update-user";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllUsersRoute);
app.register(createUserRoute);
app.register(createFinanceRoute);
app.register(getAllFinanceRoute);

app.register(getFinanceByIdRoute);
app.register(getUserByIdRoute);

app.register(updateUserRoute);

const portApi = 3333;

app
  .listen({
    port: portApi,
  })
  .then(() => {
    console.log(`HTTP SERVER IS RUNNING ON PORT ${portApi}`);
  });
