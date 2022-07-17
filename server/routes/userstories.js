import express from "express";
import {getUserStories, newUserStory} from "../controllers/userstories.js"

const router = express.Router()

router.get("/all", getUserStories)
router.post("/new", newUserStory)


export default router;