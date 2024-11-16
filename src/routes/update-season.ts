import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import z from "zod"

// Método PUT - Atualiza a temporada de uma série específica
export async function updateSeason(app: FastifyInstance) {
  app.put("/catalog/:catalogId/season/:id", async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
      catalogId: z.string().uuid(),
    })

    const bodySchema = z.object({
      number: z.number().min(1).positive(),
      episodes: z.number().min(1).positive(),
    })

    const { id, catalogId } = paramsSchema.parse(req.params)
    const { number, episodes } = bodySchema.parse(req.body)

    try {
      await prisma.season.update({
        where: {
          id,
        },
        data: {
          number,
          episodes,
          catalogId,
        },
      })

      return res.status(200).send({ message: "Série atualizada com sucesso" })
    } catch (error) {
      return res.status(500).send({ message: "Erro ao atualizar" })
    }
  })
}
