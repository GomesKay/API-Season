import { afterAll, beforeAll, describe, expect, test } from "vitest"
import { app } from "../http/server"
import request from "supertest"

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe("Retorno do Catálogo - GET /catalog", () => {
  test("Deve ser possível retornar todo catálogo", async () => {
    const response = await request(app.server).get("/catalog").expect(200)

    expect(Array.isArray(response.body)).toBe(true)
  })
})
