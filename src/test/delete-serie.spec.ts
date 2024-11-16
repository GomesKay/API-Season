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
describe("Deleta uma série específica - DELETE /catalog/:id", () => {
  test("Deve ser possível deletar uma série específica", async () => {
    const response = await request(app.server)
      .delete("/catalog/:id")
      .expect(200)

    return response
  })
})
