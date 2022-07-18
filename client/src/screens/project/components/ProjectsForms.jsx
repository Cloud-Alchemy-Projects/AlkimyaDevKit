import { React, useState } from "react";
import useStyles from "../styles";
import { Typography, TextField, Button, Grid } from "@mui/material";

const ProjectsForm = () => {
	const classes = useStyles();
	const [project, setProject] = useState({
		name: "",
		status: "",
		client: "",
		attendant: "",
	});

	const submit = (event) => {
		event.preventDefault();
		console.log(project);
	};

	return (
		<div className={classes.mainContainer}>
			<div className={classes.typoContainer}>
				<Typography className={classes.projectsTypo} variant="h4">
					New Project
				</Typography>
			</div>

			<form className={classes.formContainer} onSubmit={submit}>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Project Name
						</Typography>
						<TextField
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setProject({ ...project, name: e.target.value })
							}
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Project Status
						</Typography>
						<TextField
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setProject({
									...project,
									status: e.target.value,
								})
							}
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Client's Name
						</Typography>
						<TextField
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setProject({
									...project,
									client: e.target.value,
								})
							}
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Attendant's Name
						</Typography>
						<TextField
							
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
                            InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setProject({
									...project,
									attendant: e.target.value,
								})
							}
						/>
					</Grid>

					<Grid item xs={12}>
						<div className={classes.centerButton}>
							<Button
								type="submit"
								variant="contained"
								className={classes.createProjectButton}
							>
								Create
							</Button>
						</div>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default ProjectsForm;
