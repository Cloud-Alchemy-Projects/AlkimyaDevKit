import express from "express";
import {sendTest} from "../controllers/test.js"

const router = express.Router()

router.get("/", sendTest)

export default router;