import fastify from "fastify"
import { createSerie } from "../routes/create-serie"
import { createSeason } from "../routes/create-season"
import { getSeries } from "../routes/get-series"
import { getSerie } from "../routes/get-serie"
import { updateSerie } from "../routes/update-serie"
import { updateSeason } from "../routes/update-season"
import { deleteSerie } from "../routes/delete-serie"

export const app = fastify()

app.register(createSerie)
app.register(createSeason)
app.register(getSeries)
app.register(getSerie)
app.register(updateSerie)
app.register(updateSeason)
app.register(deleteSerie)

// Se não estiver em ambiente de testes, escuta na porta 3333
if (process.env.NODE_ENV !== "test") {
  app.listen({ port: 3333 }).then(() => {
    console.log("HTTP Server Running!")
  })
}
