"use strict";

var app = require("../../build/index");

var Request = require("supertest");

describe("Test api failded", function () {
  it("Respond with 400 Register", function (done) {
    Request(app).get("/almacen").expect("Content-Type", "/json/").expect(420, done());
  });
  it("Respond with 500 Register", function (done) {
    Request(app).post("/almacen/registro").expect("Content-Type", "/json/").expect(520, done());
  });
  it("Respond with 500 Login Router", function (done) {
    Request(app).post("/almacen/login").expect("Content-Type", "/json/").expect(502, done());
  });
});