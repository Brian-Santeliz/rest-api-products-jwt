"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schemaAlmacen = new _mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  especificaciones: {
    type: String,
    trim: true,
    required: true
  },
  precio: {
    type: Number,
    trim: true,
    required: true
  },
  area: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: false,
  versionKey: false
});

var _default = (0, _mongoose.model)("Almacen", schemaAlmacen);

exports["default"] = _default;