import fastify from "fastify"
import { routes } from "../routes/routes"

export const app = fastify()

app.register(routes)

// Se não estiver em ambiente de testes, escuta na porta 3333
if (process.env.NODE_ENV !== "test") {
  app.listen({ port: 3333 }).then(() => {
    console.log("HTTP Server Running!")
  })
}
