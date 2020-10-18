import { Router } from "express";
import Login from "../controller/login.controller";
const router = Router();
const controller = new Login();
router.post("/", controller.loginControllerPost);
export default router;
