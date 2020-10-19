const Request = require("supertest");
const app = require("../../build/index");
const user = {
  nombre: process.env.USER,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
const product = {
  nombre: "Laptop Hp 2",
  especificaciones: "Laptop I5 HP",
  precio: "300",
  area: "Laptops",
};
const productWithoutFields = {
  nombre: "Laptop Hp 2",
  especificaciones: "Laptop I5 HP",
};
const productUpdate = {
  nombre: "Laptop Hp 32",
  especificaciones: "Laptop I5 HP",
  precio: "3400",
  area: "Laptops",
};
const productUpdateWithoutFields = {
  nombre: "Laptop Hp 32",
  especificaciones: "Laptop I5 HP",
};
describe("Testing to to the route /almacen/registro", () => {
  it("Debe mandar un 201", (done) => {
    Request(app)
      .post("/almacen/registro")
      .send(user)
      .set("Accept", "/json/")
      .expect(201)
      .end((e) => {
        if (e) return done(e);
        done();
      });
  });

  it("Debe mandar un 200", (done) => {
    Request(app)
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
  it("Debe manda un 200 y un msg de login", (done) => {
    Request(app)
      .post("/almacen/login")
      .send(user)
      .set("Accept", "/json/")
      .expect(200)
      .end((error) => {
        error ? done(error) : done();
      });
  });
});

describe("Testing to the route /almacen", () => {
  it("Debe responder con status 401", (done) => {
    Request(app)
      .get("/almacen")
      .set("Accept", "/json/")
      .expect(401)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 200", (done) => {
    Request(app)
      .get("/almacen")
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN) //warning: this token expires in 1 hour.
      .expect(200)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 200 /almacen/:id", (done) => {
    Request(app)
      .get(`/almacen/${process.env.MONGO_ID}`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .expect(200)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 500 /almacen/:id", (done) => {
    Request(app)
      .get(`/almacen/32`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .expect(500)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 201  POST /almacen/", (done) => {
    Request(app)
      .post(`/almacen/`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(product)
      .expect(201)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 500  POST /almacen/ el nombre es el mismo", (done) => {
    Request(app)
      .post(`/almacen/`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(product)
      .expect(500)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 400  POST /almacen/ campos requeridos", (done) => {
    Request(app)
      .post(`/almacen/`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(productWithoutFields)
      .expect(400)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 201  PUT /almacen/:id", (done) => {
    Request(app)
      .put(`/almacen/${process.env.MONGO_ID}`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(productUpdate)
      .expect(201)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 400  PUT /almacen/:id", (done) => {
    Request(app)
      .put(`/almacen/${process.env.MONGO_ID}`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(productUpdateWithoutFields)
      .expect(400)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 500  PUT /almacen/:id", (done) => {
    Request(app)
      .put(`/almacen/${process.env.MONGO_ID}`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .send(product)
      .expect(500)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 500  DELETE /almacen/:id", (done) => {
    Request(app)
      .delete(`/almacen/3`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .expect(500)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 404  DELETE /almacen/:id", (done) => {
    Request(app)
      .delete(`/almacen/`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .expect(404)
      .end((error) => {
        error ? done(error) : done();
      });
  });
  it("Debe responder con status 200  DELETE /almacen/:id", (done) => {
    Request(app)
      .delete(`/almacen/${process.env.MONGO_ID}`)
      .set("Accept", "/json/")
      .set("almacen-auth", process.env.TOKEN)
      .expect(200)
      .end((error) => {
        error ? done(error) : done();
      });
  });
});
