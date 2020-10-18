import almacenModel from "../models/Almacen";
import Usuario from "../models/Usuario";
class Almacen {
  async almacenControllerGet(req, res) {
    try {
      const products = await almacenModel.find();
      if (products.length === 0)
        return res.status(200).json("El almacén esta vacío");
      const { nombre } = await Usuario.findById(req.userId);
      res.status(200).json({ Usuario: nombre, products });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async almacenControllerGetById(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json("El ID es requerido");
      const producto = await almacenModel.findById(id);
      if (!producto) return res.status(404).json("Este equipo no existe");
      const { nombre } = await Usuario.findById(req.userId);
      res.status(200).json({ Usuario: nombre, producto });
    } catch (error) {
      res.status(500).json({ msg: "Id no valido", error });
    }
  }
  async almacenControllerPost(req, res) {
    try {
      const { nombre, especificaciones, precio, area } = req.body;
      if (
        !nombre ||
        nombre.trim().length === 0 ||
        !especificaciones ||
        especificaciones.trim().length === 0 ||
        !precio ||
        precio.trim().length === 0 ||
        !area ||
        area.trim().length === 0
      ) {
        return res
          .status(400)
          .json("Debes ingresar todos los campos requeridos por el almacén");
      }
      let almacen = new almacenModel({
        nombre,
        especificaciones,
        precio,
        area,
      });
      await almacen.save();
      res.status(201).json("Equipo almacenado!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async almacenControllerPut(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json("El ID es requerido");
      const { nombre, especificaciones, precio, area } = req.body;
      if (
        !nombre ||
        nombre.trim().length === 0 ||
        !especificaciones ||
        especificaciones.trim().length === 0 ||
        !precio ||
        precio.trim().length === 0 ||
        !area ||
        area.trim().length === 0
      ) {
        return res
          .status(400)
          .json("Debes ingresar todos los campos requeridos por el almacén");
      }
      const product = await almacenModel.findByIdAndUpdate(
        { _id: id },
        { nombre, especificaciones, precio, area },
        { new: true }
      );
      res.status(201).json({ msg: "Equipo actulizado", product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async almacenControllerDelete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json("El ID es requerido");
      await almacenModel.findByIdAndDelete(id);
      res.status(200).json("Equipo eliminado del almacen");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default Almacen;
