"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Registro = /*#__PURE__*/function () {
  function Registro() {
    _classCallCheck(this, Registro);
  }

  _createClass(Registro, [{
    key: "registerControllerGet",
    value: function () {
      var _registerControllerGet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Usuario["default"].find();

              case 3:
                response = _context.sent;
                res.status(200).json(response);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                res.status(400).json("Algo salió mal");

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function registerControllerGet(_x, _x2) {
        return _registerControllerGet.apply(this, arguments);
      }

      return registerControllerGet;
    }()
  }, {
    key: "registerControllerPost",
    value: function () {
      var _registerControllerPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$body, email, nombre, password, responseEmail, userSaved, payload, options, Jwt;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, email = _req$body.email, nombre = _req$body.nombre, password = _req$body.password;
                _context2.next = 4;
                return _Usuario["default"].findOne({
                  email: email
                });

              case 4:
                responseEmail = _context2.sent;

                if (!responseEmail) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json("Este usuario ya existe"));

              case 7:
                _context2.t0 = _Usuario["default"];
                _context2.t1 = nombre;
                _context2.t2 = email;
                _context2.next = 12;
                return _Usuario["default"].encryptPassword(password);

              case 12:
                _context2.t3 = _context2.sent;
                _context2.t4 = {
                  nombre: _context2.t1,
                  email: _context2.t2,
                  password: _context2.t3
                };
                userSaved = new _context2.t0(_context2.t4);
                _context2.next = 17;
                return userSaved.save();

              case 17:
                payload = {
                  id: userSaved.id
                };
                options = {
                  expiresIn: 3600
                };
                Jwt = _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, options);
                res.status(201).json({
                  msg: "Registrado exitosamente!",
                  Acceso: Jwt
                });
                _context2.next = 27;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t5 = _context2["catch"](0);
                console.error(_context2.t5);
                res.status(500).json("Algo salió mal");

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 23]]);
      }));

      function registerControllerPost(_x3, _x4) {
        return _registerControllerPost.apply(this, arguments);
      }

      return registerControllerPost;
    }()
  }]);

  return Registro;
}();

var _default = Registro;
exports["default"] = _default;