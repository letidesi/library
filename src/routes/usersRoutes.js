import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router.get("/users", UserController.listUsers);
router.post("/users", UserController.registerUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;
