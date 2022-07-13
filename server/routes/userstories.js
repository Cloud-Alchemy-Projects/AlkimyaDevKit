import express from "express";
import {getUserStories} from "../controllers/userstories.js"

const router = express.Router()

router.get("/all", getUserStories)


export default router;