import {db} from "../database/sqlConnection.js"

export const getUserStories = async(req, res) =>{
    try {
        const [rows, fields] = await db.query('SELECT * FROM UserStories');
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const newUserStory = async(req, res) =>{
    try {
        await db.query(
            'INSERT INTO UserStories (quiero, pueda, story, notaGral, epic, rol, rolSecundario, idProyecto) VALUES \
            (?,?,?,?,?,?,?,?)', 
            [req.body.quiero, req.body.pueda, req.body.story,req.body.notaGral, req.body.epic, req.body.rol, req.body.rolSecundario, req.body.idProyecto]
            );
        res.status(201).send(`user ${req.body.story} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
};