import express from "express";
import {sendUsers} from "../controllers/users.js"

const router = express.Router()

router.get("/", sendUsers)

export default router;