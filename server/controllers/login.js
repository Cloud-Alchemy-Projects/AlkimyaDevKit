import {db} from "../database/sqlConnection.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const logUser = async(req, res) =>{
    try {
        const numUser = req.body.id
        const contrUser = req.body.password
        const user = await db.query(
            'SELECT * FROM usuarios WHERE NumUsuario=?', [numUser]
            );
        if (user[0].length==0) return res.status(400).json({ error: 'Usuario no encontrado' });
        const password = user[0][0].Contrasena
        const validPassword = await bcrypt.compare(contrUser, password);
        if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
        const logUser = user[0][0]
        const token = jwt.sign({
            numUser: contrUser,
        }, process.env.TOKEN_SECRET)
        
        res.header('auth-token', token).json({
            token,
            logUser
        })
    } catch (error) {
        console.log(error.message)
    }
};