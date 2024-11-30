import type { FastifyInstance } from "fastify"
import { createSerie } from "../routes/create-serie"
import { createSeason } from "../routes/create-season"
import { getSeries } from "../routes/get-series"
import { getSerie } from "../routes/get-serie"
import { updateSerie } from "../routes/update-serie"
import { updateSeason } from "../routes/update-season"
import { deleteSerie } from "../routes/delete-serie"

export function routes(app: FastifyInstance) {
  app.register(createSerie)
  app.register(createSeason)
  app.register(getSeries)
  app.register(getSerie)
  app.register(updateSerie)
  app.register(updateSeason)
  app.register(deleteSerie)
}
