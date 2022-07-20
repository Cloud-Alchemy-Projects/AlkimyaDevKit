import { db } from "../database/sqlConnection.js";

export const getAllClients = async (req, res) => {
	try {
		const [rows, fields] = await db.query(
			"SELECT clientes.idCliente, clientes.NombreCliente, clientes.ApellidoPaterno, \
            clientes.ApellidoMaterno, clientes.telefono, clientes.correo, companias.nombreCompania \
            FROM clientes INNER JOIN companias ON companias.IdCompania=clientes.Compania;"
		);
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const postNewClient = async (req, res) => {
	try {
		await db.query(
			"INSERT INTO clientes (NombreCliente, ApellidoPaterno, ApellidoMaterno, Telefono, Correo, Compania) VALUES \
            (?,?,?,?,?,?)",
			[
				req.body.NombreCliente,
				req.body.ApellidoPaterno,
				req.body.ApellidoMaterno,
				req.body.Telefono,
				req.body.Correo,
				req.body.Compania,
			]
		);
		res.status(201).send(
			`Client ${req.body.NombreCliente} was successfully created`
		);
	} catch (error) {
		console.log(error.message);
	}
};

export const getAllCompanies = async (req, res) => {
	try {
		const [rows, fields] = await db.query("SELECT * FROM companias;");
		res.status(200).json(rows);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
