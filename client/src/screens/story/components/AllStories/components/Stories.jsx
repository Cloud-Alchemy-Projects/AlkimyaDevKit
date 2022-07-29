import React, {useState} from "react";
import {
	Typography,
	Select,
	MenuItem,
	FormControl,
	Paper,
	Divider,
} from "@mui/material";
import useStyles from "../../../styles";
import SelectProject from "./BoxesStories";

const BoxesStories = ({projects, stories}) => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const classes = useStyles();
	const [selectedProject, setSelectedProject] = useState(1);

	const handleChange = (event) => {
		setSelectedProject(event.target.value);
	};
    
    let filterStories = []
    stories&& (filterStories = stories.filter((o)=>o.idProyecto===selectedProject));

	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};
	return (
		<div className={classes.containerAllView}>
			<div className={classes.topContainerAllUS}>
				<Typography className={classes.projectsTypo} variant="h4">
					User Stories
				</Typography>

				{/* <Button onClick={handleClick}>New US</Button> */}

				<Paper
					component="form"
					sx={{
						display: "flex",
						alignItems: "center",
						width: 320,
						height: 40,
						backgroundColor: "#97004D",
					}}
				>
					<Typography
						sx={{
							fontFamily: "var(--font-secondary-thin)",
							color: "white",
							marginLeft: "10px",
						}}
					>
						PROJECT
					</Typography>

					<Divider
						sx={{ marginLeft: "10px", background: "white" }}
						orientation="vertical"
					/>

					<FormControl fullWidth>
						<Select
							sx={{
								fontFamily: "var(--font-secondary-thin)",
								color: "white",
							}}
							value={selectedProject}
							MenuProps={MenuProps}
							className={classes.selectProjectId_2}
							onChange={handleChange}
							inputProps={{
								classes: {
									icon: classes.icon,
									root: classes.root,
								},
							}}
						>
							{projects.map((item, index) => {
								const { IdProyecto, NombreProyecto } = item;
								return (
									<MenuItem
										key={index}
										sx={{
											fontFamily:
												"var(--font-secondary-medium)",
										}}
										value={IdProyecto}
									>
										{NombreProyecto}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Paper>
			</div>
			<SelectProject filterStories={filterStories} stories={stories} />
		</div>
	);
};

export default BoxesStories;
