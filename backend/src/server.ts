import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { Routes } from "./routes";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(Routes);

const portApi = 3333;

app
  .listen({
    port: portApi,
  })
  .then(() => {
    console.log(`HTTP SERVER IS RUNNING ON PORT ${portApi}`);
  });
