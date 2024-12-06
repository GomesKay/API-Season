import fastify from "fastify"
import { routes } from "../routes/routes"

export const app = fastify()

app.register(routes)

// Escuta na porta 3333, exceto em ambientes de teste
if (process.env.NODE_ENV !== "test") {
  app
    .listen({ port: 3333 })
    .then(() => {
      console.log("HTTP Server Running!")
    })
    .catch(error => {
      console.error("Error Starting Server: ", error)
    })
}
