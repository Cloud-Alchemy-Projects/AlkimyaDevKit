import React, { useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import useStyle from "../../styles";
import SelectStatusProject from "./components/SelectStatusProject";
import { useDispatch, useSelector } from "react-redux";
import { getProjectStatus, getProjects } from "../../../../actions/projects";

const AllProjects = () => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.projects.fetchAllStatus);
	const projects = useSelector((state) => state.projects.fetchAllProjects);

	useEffect(() => {
		dispatch(getProjectStatus());
		dispatch(getProjects());
	}, []);

	return (
		<div className={classes.mainContainer}>
			{(status && projects) === undefined ? (
				<div className={classes.circularContainer}>
					<CircularProgress />
				</div>
			) : (
				<>
					<SelectStatusProject status={status} projects={projects}/>
				</>
			)}
		</div>
	);
};

export default AllProjects;
