import express from "express";
import {getAllClients, getAllCompanies, postNewClient, getClientName} from "../controllers/clients.js"

const router = express.Router()

// Generals
router.get("/all", getAllClients)
router.post("/new", postNewClient)

// Get client by name
router.post("/info/name", getClientName)

// Companies
router.get("/companies", getAllCompanies)

export default router;