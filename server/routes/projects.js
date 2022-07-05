import express from "express";
import {sendProjects} from "../controllers/projects.js"

const router = express.Router()

router.get("/", sendProjects)

export default router;