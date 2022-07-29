import React, { useEffect, useState } from "react";
import {
	CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "../../styles";
import { getUserStories } from "../../../../actions/userstories.js";
import { getProjects } from "../../../../actions/projects.js";
import Stories from "./components/Stories";

const AllStories = () => {
	const classes = useStyle();
	const dispatch = useDispatch();

	const userstories = useSelector((state) => state.userstories.fetchAll);
	const projects = useSelector((state) => state.projects.fetchAllProjects);

	useEffect(() => {
		dispatch(getUserStories());
		dispatch(getProjects());
	}, []);

	const [story, setStory] = useState({
		projectId: "",
	});

	//Deficion del arreglo y el uso de .find para clasificar los ID de las UserStories
	// let blacklog = [];
	// allBlacklog &&
	// 	(blacklog = allBlacklog.find((o) => o.Estatus === story.projectId));
	// let ondeck = [];
	// allOndeck &&
	// 	(ondeck = allOndeck.find((o) => o.Estatus === story.projectId));
	// let active = [];
	// allActive &&
	// 	(active = allActive.find((o) => o.Estatus === story.projectId));
	// let complete = [];
	// allComplete &&
	// 	(complete = allComplete.find((o) => o.Estatus === story.projectId));

	return (
		<div className={classes.mainContainer}>
			{(userstories && projects) === undefined ? (
				<div className={classes.circularContainer}>
					<CircularProgress />
				</div>
			) : (
				<>
                <Stories projects={projects} stories={userstories}/>
					{/* return ( AGREGAR TODO ESTO DENTRO DEL BOX
										<MenuItem
											key={IdUsuario}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={IdUsuario}
										>
											{`${NombreUsuario} ${ApellidoPaterno}`}
										</MenuItem>
									); */}
                
					
						{/* <Grid
							container
							rowSpacing={1}
							columnSpacing={{ sm: 2, md: 3 }}
						> */}
							{/* PRIMERA COLUMNA QUE CONTIENE 3 */}
							{/* <Grid
								item
								xs={2}
								md={2}
								className={classes.paperContainer}
							>
								<Typography
									className={classes.paperTypo}
									variant="body"
								>
									Backlog
								</Typography>

								<IconButton size="small">
									<AddIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<IconButton size="small">
									<MoreVertIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>
								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>
								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>

								<Button
									size="small"
									sx={{
										color: "#959595",
										textTransform: "capitalize",
										fontSize: "12px",
									}}
									startIcon={
										<AddIcon sx={{ color: "#959595" }} />
									}
								>
									New Card
								</Button>
							</Grid> */}

							{/* SEGUNDA COLUMNA QUE CONTIENE 4 */}
							{/* <Grid
								item
								xs={2}
								md={2}
								className={classes.paperContainer}
							>
								<Typography
									className={classes.paperTypo}
									variant="body"
								>
									On Deck
								</Typography>

								<IconButton size="small">
									<AddIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<IconButton size="small">
									<MoreVertIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<Box
									className={classes.boxContainer}
									sx={{ opacity: "50%" }}
								/>
								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>
								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>
								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>

								<Button
									size="small"
									sx={{
										color: "#959595",
										textTransform: "capitalize",
										fontSize: "12px",
									}}
									startIcon={
										<AddIcon sx={{ color: "#959595" }} />
									}
								>
									New Card
								</Button>
							</Grid> */}

							{/* TERCERA COLUMNA QUE CONTIENE 2 */}
							{/* <Grid
								item
								xs={2}
								md={2}
								className={classes.paperContainer}
							>
								<Typography
									className={classes.paperTypo}
									variant="body"
								>
									Active
								</Typography>

								<IconButton size="small">
									<AddIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<IconButton size="small">
									<MoreVertIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>

								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>

								<Button
									size="small"
									sx={{
										color: "#959595",
										textTransform: "capitalize",
										fontSize: "12px",
									}}
									startIcon={
										<AddIcon sx={{ color: "#959595" }} />
									}
								>
									New Card
								</Button>
							</Grid> */}

							{/* ULTIMA COLUMNA QUE CONTIENE 1 */}
							{/* <Grid
								item
								xs={2}
								md={2}
								className={classes.paperContainer}
							>
								<Typography
									className={classes.paperTypo}
									variant="body"
								>
									Complete
								</Typography>

								<IconButton size="small">
									<AddIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<IconButton size="small">
									<MoreVertIcon
										fontSize="inherit"
										sx={{ color: "#959595" }}
									/>
								</IconButton>

								<Box
									className={classes.boxContainer}
									sx={{ opacity: "20%" }}
								/>

								<Button
									size="small"
									sx={{
										color: "#959595",
										textTransform: "capitalize",
										fontSize: "12px",
									}}
									startIcon={
										<AddIcon sx={{ color: "#959595" }} />
									}
								>
									New Card
								</Button>
							</Grid> */}
						{/* </Grid> */}
				</>
			)}
		</div>
	);
};

export default AllStories;
