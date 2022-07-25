import { React, useState, useEffect } from "react";
import useStyles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { getClients } from "../../../../actions/clients";
import { getUsers } from "../../../../actions/users";
import Form from "./components/Form";

const ProjectsForm = () => {
	const classes = useStyles();
    const dispatch = useDispatch();
	const allClients = useSelector((state) => state.client.fetchAllClients);
	const allUsers = useSelector((state) => state.users.fetchAllusers);

	useEffect(() => {
		dispatch(getClients());
		dispatch(getUsers());
	}, []);

	return (
		<div className={classes.mainContainer}>
			{(allUsers && allClients) === undefined ?
				<div className={classes.circularContainer}>
					<CircularProgress />
				</div>
			: 
				<Form allUsers={allUsers} allClients={allClients} />
			}
		</div>
	);
};

export default ProjectsForm;
