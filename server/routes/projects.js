import express from "express";
import {sendProjects, newProject, getProjectStatus} from "../controllers/projects.js";

const router = express.Router()

//Generals
router.get("/all", sendProjects)
router.post("/new", newProject)

//Status
router.get("/status", getProjectStatus)


export default router;