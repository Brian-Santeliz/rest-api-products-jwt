import { model, Schema } from "mongoose";

const schemaAlmacen = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    especificaciones: {
      type: String,
      trim: true,
      required: true,
    },
    precio: {
      type: Number,
      trim: true,
      required: true,
    },
    area: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
export default model("Almacen", schemaAlmacen);
