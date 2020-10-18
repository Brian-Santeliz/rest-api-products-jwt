const request = require("supertest");
const app = require("../../build/index");

describe("Test api failded", () => {
  it("Respond with 400 Register", (done) => {
    request(app)
      .get("/almacen")
      .set("Content-Type", "/json/")
      .expect(401)
      .end((e) => {
        if (e) return done(e);
        done();
      });
  });
  it("Respond with 500 Register", (done) => {
    request(app)
      .post("/almacen/registro")
      .expect("Content-Type", "/json/")
      .expect(520, done());
  });
  it("Respond with 500 Login Router", (done) => {
    request(app)
      .post("/almacen/login")
      .expect("Content-Type", "/json/")
      .expect(502, done());
  });
});
it("test", (done) => {
  request(app)
    .delete("/almacen/344")
    .expect("Content-Type", "/json/")
    .expect(420, done());
});
