import express from "express";
import {sendProjects, newProject, getProjectStatus} from "../controllers/projects.js";

const router = express.Router()

router.get("/all", sendProjects)
router.get("/status", getProjectStatus)
router.post("/new", newProject)

export default router;