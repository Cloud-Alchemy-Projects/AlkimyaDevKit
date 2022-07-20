import { db } from "../database/sqlConnection.js";

export const getUserStories = async (req, res) => {
	try {
		const [rows, fields] = await db.query("SELECT * FROM UserStories");
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const newUserStory = async (req, res) => {
	try {
		await db.query(
			"INSERT INTO UserStories (quiero, pueda, story, notaGral, epic, rol, rolSecundario, idProyecto) VALUES \
            (?,?,?,?,?,?,?,?)",
			[
				req.body.quiero,
				req.body.pueda,
				req.body.story,
				req.body.notaGral,
				req.body.epic,
				req.body.rol,
				req.body.rolSecundario,
				req.body.idProyecto,
			]
		);
		res.status(201).send(`User ${req.body.story} was successfully created`);
	} catch (error) {
		console.log(error.message);
	}
};

export const getRoles = async (req, res) => {
	try {
		const [rows, fields] = await db.query("SELECT * FROM rol");
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getRolesProject = async (req, res) => {
	try {
		const [
			rows,
			fields,
		] = await db.query("SELECT * FROM rol where idProyecto=(?)", [
			req.body.idProyecto,
		]);
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const newRoleProject = async (req, res) => {
	try {
		await db.query(
			"INSERT INTO rol (nombreRol, descripcion, actores, idProyecto) VALUES \
            (?,?,?,?)",
			[
				req.body.nombreRol,
				req.body.descripcion,
				req.body.actores,
				req.body.idProyecto,
			]
		);
		res.status(201).send(
			`Rol ${req.body.nombreRol} was successfully created`
		);
	} catch (error) {
		console.log(error.message);
	}
};

export const getEpics = async (req, res) => {
	try {
		const [rows, fields] = await db.query("SELECT * FROM epic");
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getEpicsProject = async (req, res) => {
	try {
		const [
			rows,
			fields,
		] = await db.query("SELECT * FROM epic where idProyecto=(?)", [
			req.body.idProyecto,
		]);
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const newEpicProject = async (req, res) => {
	try {
		await db.query(
			"INSERT INTO epic (nombreEpic, descripcion, idProyecto) VALUES \
            (?,?,?)",
			[
				req.body.nombreEpic,
				req.body.descripcion,
				req.body.idProyecto,
			]
		);
		res.status(201).send(
			`Epic ${req.body.nombreEpic} was successfully created`
		);
	} catch (error) {
		console.log(error.message);
	}
};
