import { afterAll, beforeAll, describe, expect, test } from "vitest"
import { app } from "../http/server"
import request from "supertest"

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

// :catalogId -> Parâmetro para passar o ID da Série nos testes
describe("Criação de uma Temporada da Série - POST /catalog/:catalogId/season", () => {
  test("Deve ser possível criar uma nova temporada", async () => {
    await request(app.server)
      .post("/catalog/db4def74-bb9b-4885-b5af-e1de587ee1f8/season")
      .send({
        number: 5,
        episodes: 50,
      })
      .expect(201)
  })

  test("Não deve ser possível criar uma nova temporada com dados incompletos ou errados", async () => {
    const response = await request(app.server)
      .post("/catalog/db4def74-bb9b-4885-b5af-e1de587ee1f8/season")
      .send({
        number: "5",
        episodes: 50,
      })
      .expect(500)

    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Erro ao criar",
      })
    )
  })
})
