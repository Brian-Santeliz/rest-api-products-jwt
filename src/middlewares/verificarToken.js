import jwt from "jsonwebtoken";

class Auth {
  static verificarToken(req, res, next) {
    const token = req.headers["almacen-auth"];
    if (!token) return res.status(401).json("No existe el Token");

    try {
      const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = tokenVerify.id;
      next();
    } catch (error) {
      res.status(403).json("El token es invalido o expiró");
    }
  }
}
export default Auth;
