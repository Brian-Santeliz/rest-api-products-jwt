import Usuario from "../models/Usuario";
import jwt from "jsonwebtoken";
import Registro from "./registro.controller";
class Login extends Registro {
  async loginControllerPost(req, res) {
    try {
      const { email, password } = req.body;
      let checkUser = await Usuario.findOne({ email });
      if (!checkUser) return res.status(400).json("Este usuario no existe");
      const resPass = await Usuario.verifyPassword(
        password,
        checkUser.password
      );
      if (!resPass) return res.status(403).json("Password incorrecto");

      const payload = {
        id: checkUser.id,
      };
      const options = {
        expiresIn: 3600,
      };
      const JWT = jwt.sign(payload, process.env.SECRET_KEY, options);
      return res.status(200).json({ msg: "Acceso Exitoso", token: JWT });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default Login;
