const e = require("../../build/index");
const Request = require("supertest");

describe("Test api failded", () => {
  it("Respond with 400 Register", (done) => {
    Request(e)
      .get("/almacen")
      .expect("Content-Type", "/json/")
      .expect(420, done());
  });
  it("Respond with 500 Register", (done) => {
    Request(e)
      .post("/almacen/registro")
      .expect("Content-Type", "/json/")
      .expect(520, done());
  });
  it("Respond with 500 Login Router", (done) => {
    Request(e)
      .post("/almacen/login")
      .expect("Content-Type", "/json/")
      .expect(502, done());
  });
});
it("test", (done) => {
  Request(e)
    .delete("/almacen/344")
    .expect("Content-Type", "/json/")
    .expect(420, done());
});
