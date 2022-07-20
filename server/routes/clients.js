import express from "express";
import {getAllClients, getAllCompanies, postNewClient} from "../controllers/clients.js"

const router = express.Router()

router.get("/all", getAllClients)
router.get("/companies", getAllCompanies)
router.post("/new", postNewClient)

export default router;