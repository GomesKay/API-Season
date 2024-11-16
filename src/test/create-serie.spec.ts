import { afterAll, beforeAll, describe, expect, test } from "vitest"
import { app } from "../http/server"
import request from "supertest"

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe("Criação de Série - POST /catalog", () => {
  test("Deve ser possível criar uma nova série", async () => {
    await request(app.server)
      .post("/catalog")
      .send({
        title: "Exemplo de Teste",
        description: "Teste com Vitest e Supertest",
        gender: "DRAMA",
        year_of_release: 2024,
      })
      .expect(201)
  })

  test("Não deve ser possível criar uma nova série com dados incompletos ou errados", async () => {
    const response = await request(app.server)
      .post("/catalog")
      .send({
        title: "Exemplo de Teste",
        description: "Teste com Vitest e Supertest",
        gender: "DRAMA",
        year_of_release: "2024",
      })
      .expect(400)

    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Erro ao criar",
      })
    )
  })
})
