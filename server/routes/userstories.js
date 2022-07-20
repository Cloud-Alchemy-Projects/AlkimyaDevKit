import express from "express";
import {getUserStories, newUserStory, getRoles, getEpics, getRolesProject, newRoleProject, getEpicsProject, newEpicProject} from "../controllers/userstories.js"

const router = express.Router()

// Generals
router.get("/all", getUserStories)
router.post("/new", newUserStory)

// Rols
router.get("/roles", getRoles)
router.post("/roles/projects", getRolesProject)
router.post("/roles/projects/new", newRoleProject)

// Epics
router.get("/epics", getEpics)
router.post("/epics/projects", getEpicsProject)
router.post("/epics/projects/new", newEpicProject)


export default router;