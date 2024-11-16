import type { FastifyInstance } from "fastify"
import { GeneroEnum } from "./create-serie"
import { prisma } from "../lib/prisma"
import z from "zod"

// Método PUT - Atualiza uma série específica
export async function updateSerie(app: FastifyInstance) {
  app.put("/catalog/:id", async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const bodySchema = z.object({
      title: z.string().min(1),
      description: z.string().nullable(),
      gender: GeneroEnum,
      year_of_release: z.number().int().positive(),
    })

    const { id } = paramsSchema.parse(req.params)
    const { title, description, gender, year_of_release } = bodySchema.parse(
      req.body
    )

    try {
      await prisma.catalog.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          gender,
          year_of_release,
        },
      })

      return res.status(200).send({ message: "Série atualizada com sucesso" })
    } catch (error) {
      return res.status(500).send({ message: "Erro ao atualizar" })
    }
  })
}
