import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import routerRegister from "./routes/registro.router";
import routerLogin from "./routes/login.router";
import routerAlmacen from "./routes/almacen.router";
import Auth from "./middlewares/verificarToken";

const app = express();
dotenv.config();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use("/almacen/registro", routerRegister);
app.use("/almacen/login", routerLogin);
app.use("/almacen", Auth.verificarToken, routerAlmacen);

export default app;
