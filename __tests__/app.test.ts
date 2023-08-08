import request from "supertest";
import app from "../src/app";




describe("epxress app.ts", () => {
    beforeEach(() => jest.resetModules());
  test("express app default get method", async ()  => {

    const res = await request(app).get("/");
    // console.dir(res)
    expect(res.statusCode).toEqual(200);
    // done()

  });
});