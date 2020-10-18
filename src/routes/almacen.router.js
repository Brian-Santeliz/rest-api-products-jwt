import { Router } from "express";
import Almacen from "../controller/almacen.controller";
const controller = new Almacen();
const router = Router();

router.get("/", controller.almacenControllerGet);
router.get("/:id", controller.almacenControllerGetById);
router.post("/", controller.almacenControllerPost);
router.put("/:id", controller.almacenControllerPut);
router.delete("/:id", controller.almacenControllerDelete);

export default router;
