import { afterAll, beforeAll, describe, test } from "vitest"
import { app } from "../http/server"
import request from "supertest"

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

// :catalogId -> Parâmetro para passar o ID da Série nos testes
// :id -> Parâmetro para passar o ID da Temporada nos testes
describe("Atualiza uma Temporada de uma Série Específica - PUT /catalog/:catalogId/season/:id", () => {
  test("Deve ser possível atualizar uma temporada de uma série específica", async () => {
    const response = await request(app.server)
      .put("/catalog/:catalogId/season/:id")
      .send({
        number: 2,
        episodes: 20,
      })
      .expect(200)

    return response
  })

  test("Não deve ser possível atualizar uma temporada de uma série específica com dados incompletos ou errados", async () => {
    const response = await request(app.server)
      .put("/catalog/:catalogId/season/:id")
      .send({
        number: "10",
        episodes: 50,
      })
      .expect(500)

    return response
  })
})
