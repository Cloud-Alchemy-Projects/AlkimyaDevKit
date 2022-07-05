import {db} from "../database/sqlConnection.js"

export const sendProjects = async(req, res) =>{
    try {
        const [rows, fields] = await db.query('SELECT * FROM proyectos');
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};