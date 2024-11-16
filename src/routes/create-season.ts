import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"

// Método POST - Cria uma nova temporada da série
export async function createSeason(app: FastifyInstance) {
  app.post("/catalog/:catalogId/season", async (req, res) => {
    const createSeasonSchema = z.object({
      number: z.number().min(1).positive(),
      episodes: z.number().min(1).positive(),
    })

    const catalogIdSchema = z.object({
      catalogId: z.string().uuid(),
    })

    try {
      const { catalogId } = catalogIdSchema.parse(req.params)
      const { number, episodes } = createSeasonSchema.parse(req.body)

      const newSeason = await prisma.season.create({
        data: {
          number,
          episodes,
          catalogId,
        },
      })

      return res
        .status(201)
        .send({ message: "Criado com sucesso", serie: newSeason })
    } catch (error) {
      return res.status(500).send({ message: "Erro ao criar" })
    }
  })
}
