import express from "express";
import {sendProjects, newProject} from "../controllers/projects.js";

const router = express.Router()

router.get("/all", sendProjects)
router.post("/new", newProject)

export default router;