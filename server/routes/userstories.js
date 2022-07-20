import express from "express";
import {getUserStories, newUserStory, getRols, getEpics} from "../controllers/userstories.js"

const router = express.Router()

router.get("/all", getUserStories)
router.get("/rols", getRols)
router.get("/epics", getEpics)
router.post("/new", newUserStory)


export default router;