import { afterAll, beforeAll, describe, test } from "vitest"
import { app } from "../http/server"
import request from "supertest"

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

// :id -> Parâmetro para passar o ID da Série nos testes
describe("Atualiza uma Série Específica - PUT /catalog/:id", () => {
  test("Deve ser possível atualizar a série específica", async () => {
    const response = await request(app.server)
      .put("/catalog/7c9873c1-494c-45f0-b83b-3281e5003008")
      .send({
        title: "Atualização de Teste",
        description: "Atualização com Vitest e Supertest",
        gender: "DRAMA",
        year_of_release: 2024,
      })
      .expect(200)

    return response
  })

  test("Não deve ser possível atualizar uma nova série com dados incompletos ou errados", async () => {
    const response = await request(app.server)
      .put("/catalog/79511c33-7717-476f-9bcd-dfcd057f5d99")
      .send({
        title: "Atualização de Teste",
        description: 20,
        gender: "DRAMA",
        year_of_release: 2024,
      })
      .expect(500)

    return response
  })
})
