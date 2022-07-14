import {db} from "../database/sqlConnection.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
export const logUser = async(req, res) =>{
    try {
        const numUser = req.body.id
        const contrUser = req.body.password
        const user = await db.query(
            'SELECT Contrasena FROM usuarios WHERE NumUsuario=?', [numUser]
            );
        if (user[0].length==0) return res.status(400).json({ error: 'Usuario no encontrado' });
        const password = user[0][0].Contrasena
        const validPassword = await bcrypt.compare(contrUser, password);
        if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

        const token = jwt.sign({
            numUser: contrUser,
        }, process.env.TOKEN_SECRET)
        
        res.header('auth-token', token).json({
            data: {token}
        })

    } catch (error) {
        console.log(error.message)
    }
};