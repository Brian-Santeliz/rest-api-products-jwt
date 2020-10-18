"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Almacen = _interopRequireDefault(require("../models/Almacen"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Almacen = /*#__PURE__*/function () {
  function Almacen() {
    _classCallCheck(this, Almacen);
  }

  _createClass(Almacen, [{
    key: "almacenControllerGet",
    value: function () {
      var _almacenControllerGet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var products, _yield$Usuario$findBy, nombre;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Almacen["default"].find();

              case 3:
                products = _context.sent;

                if (!(products.length === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(200).json("El almacén esta vacío"));

              case 6:
                _context.next = 8;
                return _Usuario["default"].findById(req.userId);

              case 8:
                _yield$Usuario$findBy = _context.sent;
                nombre = _yield$Usuario$findBy.nombre;
                res.status(200).json({
                  Usuario: nombre,
                  products: products
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                res.status(500).json(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function almacenControllerGet(_x, _x2) {
        return _almacenControllerGet.apply(this, arguments);
      }

      return almacenControllerGet;
    }()
  }, {
    key: "almacenControllerGetById",
    value: function () {
      var _almacenControllerGetById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id, producto, _yield$Usuario$findBy2, nombre;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = req.params.id;

                if (id) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json("El ID es requerido"));

              case 4:
                _context2.next = 6;
                return _Almacen["default"].findById(id);

              case 6:
                producto = _context2.sent;

                if (producto) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json("Este equipo no existe"));

              case 9:
                _context2.next = 11;
                return _Usuario["default"].findById(req.userId);

              case 11:
                _yield$Usuario$findBy2 = _context2.sent;
                nombre = _yield$Usuario$findBy2.nombre;
                res.status(200).json({
                  Usuario: nombre,
                  producto: producto
                });
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                res.status(500).json({
                  msg: "Id no valido",
                  error: _context2.t0
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 16]]);
      }));

      function almacenControllerGetById(_x3, _x4) {
        return _almacenControllerGetById.apply(this, arguments);
      }

      return almacenControllerGetById;
    }()
  }, {
    key: "almacenControllerPost",
    value: function () {
      var _almacenControllerPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body, nombre, especificaciones, precio, area, almacen;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _req$body = req.body, nombre = _req$body.nombre, especificaciones = _req$body.especificaciones, precio = _req$body.precio, area = _req$body.area;

                if (!(!nombre || nombre.trim().length === 0 || !especificaciones || especificaciones.trim().length === 0 || !precio || precio.trim().length === 0 || !area || area.trim().length === 0)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json("Debes ingresar todos los campos requeridos por el almacén"));

              case 4:
                almacen = new _Almacen["default"]({
                  nombre: nombre,
                  especificaciones: especificaciones,
                  precio: precio,
                  area: area
                });
                _context3.next = 7;
                return almacen.save();

              case 7:
                res.status(201).json("Equipo almacenado!");
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                res.status(500).json(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function almacenControllerPost(_x5, _x6) {
        return _almacenControllerPost.apply(this, arguments);
      }

      return almacenControllerPost;
    }()
  }, {
    key: "almacenControllerPut",
    value: function () {
      var _almacenControllerPut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, _req$body2, nombre, especificaciones, precio, area, product;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;

                if (id) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json("El ID es requerido"));

              case 4:
                _req$body2 = req.body, nombre = _req$body2.nombre, especificaciones = _req$body2.especificaciones, precio = _req$body2.precio, area = _req$body2.area;

                if (!(!nombre || nombre.trim().length === 0 || !especificaciones || especificaciones.trim().length === 0 || !precio || precio.trim().length === 0 || !area || area.trim().length === 0)) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json("Debes ingresar todos los campos requeridos por el almacén"));

              case 7:
                _context4.next = 9;
                return _Almacen["default"].findByIdAndUpdate({
                  _id: id
                }, {
                  nombre: nombre,
                  especificaciones: especificaciones,
                  precio: precio,
                  area: area
                }, {
                  "new": true
                });

              case 9:
                product = _context4.sent;
                res.status(201).json({
                  msg: "Equipo actulizado",
                  product: product
                });
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                res.status(500).json(_context4.t0);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }));

      function almacenControllerPut(_x7, _x8) {
        return _almacenControllerPut.apply(this, arguments);
      }

      return almacenControllerPut;
    }()
  }, {
    key: "almacenControllerDelete",
    value: function () {
      var _almacenControllerDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;

                if (id) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", res.status(400).json("El ID es requerido"));

              case 4:
                _context5.next = 6;
                return _Almacen["default"].findByIdAndDelete(id);

              case 6:
                res.status(200).json("Equipo eliminado del almacen");
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                res.status(500).json(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function almacenControllerDelete(_x9, _x10) {
        return _almacenControllerDelete.apply(this, arguments);
      }

      return almacenControllerDelete;
    }()
  }]);

  return Almacen;
}();

var _default = Almacen;
exports["default"] = _default;