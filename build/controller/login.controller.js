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

var Login = /*#__PURE__*/function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, [{
    key: "loginControllerPost",
    value: function () {
      var _loginControllerPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, email, password, checkUser, resPass, payload, options, JWT;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context.next = 4;
                return _Usuario["default"].findOne({
                  email: email
                });

              case 4:
                checkUser = _context.sent;

                if (checkUser) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(400).json("Este usuario no existe"));

              case 7:
                _context.next = 9;
                return _Usuario["default"].verifyPassword(password, checkUser.password);

              case 9:
                resPass = _context.sent;

                if (resPass) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", res.status(403).json("Password incorrecto"));

              case 12:
                payload = {
                  id: checkUser.id
                };
                options = {
                  expiresIn: 3600
                };
                JWT = _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, options);
                return _context.abrupt("return", res.status(200).json({
                  msg: "Acceso Exitoso",
                  token: JWT
                }));

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                res.status(500).json(_context.t0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      }));

      function loginControllerPost(_x, _x2) {
        return _loginControllerPost.apply(this, arguments);
      }

      return loginControllerPost;
    }()
  }]);

  return Login;
}();

var _default = Login;
exports["default"] = _default;