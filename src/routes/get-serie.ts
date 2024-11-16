import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import z from "zod"

// Método GET - Retorna uma série específica
export async function getSerie(app: FastifyInstance) {
  app.get("/catalog/:id", async (req, res) => {
    const getSerieSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getSerieSchema.parse(req.params)

    try {
      const serie = await prisma.catalog.findUnique({
        where: {
          id,
        },
        include: {
          seasons: true,
        },
      })

      return res.status(200).send(serie)
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar dados" })
    }
  })
}
