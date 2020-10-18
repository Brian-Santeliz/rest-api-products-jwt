const request = require("supertest");
const app = require("../../build/index");

describe("Testingto to the route /almacen/registro", () => {
  it("Debe mandar un 201", (done) => {
    request(app)
      .post("/almacen/registro")
      .send({
        nombre: "ejemplo",
        email: "mai3l@mail.com",
        password: "123",
      })
      .set("Accept", "/json/")
      .expect(201)
      .end((e) => {
        if (e) return done(e);
        done();
      });
  });

  it("Debe mandar un 200", (done) => {
    request(app)
      .get("/almacen/registro")
      .set("Content-Type", "/json/")
      .expect(200)
      .end((error) => {
        if (error) return done(error);
        done();
      });
  });
});

describe("Testing to the route /almacen/login", () => {
  it("Debe manda un ");
});
