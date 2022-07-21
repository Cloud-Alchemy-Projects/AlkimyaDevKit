import express from "express";
import { newUser, getUsuarios } from "../controllers/users.js";

const router = express.Router()

router.get("/all", getUsuarios)
router.post("/new", newUser)

export default router;