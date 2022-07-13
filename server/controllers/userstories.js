import {db} from "../database/sqlConnection.js"

export const getUserStories = async(req, res) =>{
    try {
        const [rows, fields] = await db.query('SELECT * FROM UserStories');
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};