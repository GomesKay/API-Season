import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

// Método GET - Retorna todo o catálogo
export async function getSeries(app: FastifyInstance) {
  app.get("/catalog", async (req, res) => {
    try {
      const catalog = await prisma.catalog.findMany({
        include: {
          seasons: true,
        },
      })

      return res.status(200).send(catalog)
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar dados" })
    }
  })
}
