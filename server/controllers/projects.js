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
            [req.body.NombreProyecto, req.body.Estatus, req.body.Cliente,req.body.Usuario]
            );
        res.status(201).send(`project ${req.body.NombreProyecto} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
};