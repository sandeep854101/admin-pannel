import express from "express";
const router = express.Router();
import { getUser, deleteUser, updateUser, createUser, getUsers } from "../controllers/userController.js";
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
