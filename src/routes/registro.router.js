import { Router } from "express";
import Registro from "../controller/registro.controller";
const router = Router();
const controller = new Registro();

router.get("/", controller.registerControllerGet);
router.post("/", controller.registerControllerPost);
export default router;
