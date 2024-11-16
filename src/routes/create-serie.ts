import type { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"

export const GeneroEnum = z.enum([
  "ACAO",
  "ANIMACAO",
  "AVENTURA",
  "COMEDIA",
  "DOCUMENTARIO",
  "DRAMA",
  "FICCAO_CIENTIFICA",
  "ROMANCE",
  "SUSPENSE",
  "TERROR",
])

// Método POST - Cria uma nova série
export async function createSerie(app: FastifyInstance) {
  app.post("/catalog", async (req, res) => {
    const createSerieSchema = z.object({
      title: z.string().min(1),
      description: z.string().nullable(),
      gender: GeneroEnum,
      year_of_release: z.number().int().positive(),
    })

    try {
      const { title, description, gender, year_of_release } =
        createSerieSchema.parse(req.body)

      const newSerie = await prisma.catalog.create({
        data: {
          title,
          description,
          gender,
          year_of_release,
        },
      })

      return res
        .status(201)
        .send({ message: "Criado com sucesso", serie: newSerie })
    } catch (error) {
      return res.status(400).send({ message: "Erro ao criar" })
    }
  })
}
