import {db} from "../database/sqlConnection.js"

export const sendProjects = async(req, res) =>{
    try {
        const [rows, fields] = await db.query('SELECT * FROM proyectos');
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const newProject = async(req, res) =>{
    try {
        await db.query(
            'INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES \
            (?,?,?,?)', 
            [req.body.name, req.body.status, req.body.client,req.body.attendant]
            );
        res.status(201).send(`project ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
};

export const getProjectStatus = async(req, res) =>{

    try {
        const [rows, fields] = await db.query('SELECT * FROM estatusdeProyecto');
        res.status(200).json(rows);
    } catch (error) {
        console.log(error.message)
    }
};