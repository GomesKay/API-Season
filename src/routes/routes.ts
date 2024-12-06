import type { FastifyInstance } from "fastify"
import { createSerie } from "../routes/create-serie"
import { createSeason } from "../routes/create-season"
import { getSeries } from "../routes/get-series"
import { getSerie } from "../routes/get-serie"
import { updateSerie } from "../routes/update-serie"
import { updateSeason } from "../routes/update-season"
import { deleteSerie } from "../routes/delete-serie"

export async function routes(app: FastifyInstance) {
  await app.register(createSerie)
  await app.register(createSeason)
  await app.register(getSeries)
  await app.register(getSerie)
  await app.register(updateSerie)
  await app.register(updateSeason)
  await app.register(deleteSerie)
}
