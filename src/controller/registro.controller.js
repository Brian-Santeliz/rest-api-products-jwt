import Usuario from "../models/Usuario";
import jwt from "jsonwebtoken";

class Registro {
  async registerControllerGet(req, res) {
    try {
      const response = await Usuario.find();
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(400).json("Algo salió mal");
    }
  }
  async registerControllerPost(req, res) {
    try {
      const { email, nombre, password } = req.body;
      const responseEmail = await Usuario.findOne({ email });
      if (responseEmail) return res.status(400).json("Este usuario ya existe");

      let userSaved = new Usuario({
        nombre,
        email,
        password: await Usuario.encryptPassword(password),
      });
      await userSaved.save();

      const payload = {
        id: userSaved.id,
      };
      const options = {
        expiresIn: 3600,
      };
      const Jwt = jwt.sign(payload, process.env.SECRET_KEY, options);
      res.status(201).json({ msg: "Registrado exitosamente!", Acceso: Jwt });
    } catch (error) {
      console.error(error);
      res.status(500).json("Algo salió mal");
    }
  }
}
export default Registro;
