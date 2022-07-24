import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../../styles";
import {
    CircularProgress
} from "@mui/material";

import { getProjects } from "../../../../actions/projects";
import { getRoles, getEpics } from "../../../../actions/userstories";
import Form from "./components/Form";

const StoriesForms = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const projects = useSelector((state) => state.projects);
	const roles = useSelector((state) => state.userstories.fetchAllRoles);
	const epics = useSelector((state) => state.userstories.fetchAllEpics);

	useEffect(() => {
		dispatch(getProjects());
		dispatch(getRoles());
		dispatch(getEpics());
	}, []);

	return (
		<div className={classes.mainContainer}>
        {epics===undefined?
            <div className={classes.circularContainer}>
                <CircularProgress />
            </div>
            :
                <Form projects={projects} roles={roles} epics={epics}/>
            }
		</div>
	);
};

export default StoriesForms;
