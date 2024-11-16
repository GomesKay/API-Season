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
describe("Retorno de uma Série Específica - GET /catalog/:id", () => {
  test("Deve ser possível retornar uma série específica", async () => {
    const response = await request(app.server)
      .get("/catalog/9c1efa18-0c23-4675-8f3c-09aa72d7ccf2")
      .expect(200)

    return response
  })
})
