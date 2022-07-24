import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {validation} from "./middleware/validateToken.js";

// Rutas
import loginRoutes from './routes/login.js';
import usersRoutes from './routes/users.js';
import projectsRoutes from './routes/projects.js';
import userstoriesRoutes from "./routes/userstories.js";
import clientsRoutes from "./routes/clients.js";

const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.use('/login', loginRoutes)
app.use('/users', validation, usersRoutes)
app.use('/projects', validation, projectsRoutes)
app.use('/userstories', validation, userstoriesRoutes)
app.use('/clients', validation, clientsRoutes)
// Server configuration
const PORT = process.env.PORT || 1010;

app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
})
