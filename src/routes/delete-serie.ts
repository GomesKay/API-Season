import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"

// Método DELETE - Deleta uma série específica
export async function deleteSerie(app: FastifyInstance) {
  app.delete("/catalog/:id", async (req, res) => {
    const deleteSerieSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = deleteSerieSchema.parse(req.params)

    try {
      await prisma.catalog.delete({
        where: {
          id,
        },
      })

      return res
        .status(200)
        .send({ message: "Série e temporadas deletadas com sucesso" })
    } catch (error) {
      return res.status(500).send({ message: "Erro ao deletar série" })
    }
  })
}
