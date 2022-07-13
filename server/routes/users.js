import express from "express";
import {logUser, newUser} from "../controllers/users.js"

const router = express.Router()

router.post("/login", logUser)
router.post("/new", newUser)

export default router;