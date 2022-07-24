import {db} from "../database/sqlConnection.js"
import bcrypt from 'bcryptjs'

export const newUser = async(req, res) =>{
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.Contrasena, salt);
    try {
        await db.query(
            'INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES \
            (?,?,?,?,?,?)', 
            [req.body.NumUsuario, req.body.NombreUsuario, req.body.ApellidoPaterno,req.body.ApellidoMaterno, password, req.body.TipoDeUsuario]
            );
        res.status(201).send(`user ${req.body.NombreUsuario} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
};

export const getUsuarios = async(req, res) =>{

    try {
        const [rows, fields] = await db.query('SELECT * FROM usuarios');
        res.status(200).json(rows);
    } catch (error) {
        console.log(error.message)
    }
};