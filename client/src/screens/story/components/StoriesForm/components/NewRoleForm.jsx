import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	Typography,
	TextField,
} from "@mui/material";
import useStyles from "../../../styles";
import { useDispatch } from "react-redux";
import { newRole, getRoles } from "../../../../../actions/userstories";

const NewRoleForm = ({ open, handleClose, proyecto }) => {
	const classes = useStyles();
	const [rol, setRol] = useState({
		nombreRol: "",
		descripcion: "",
		actores: 1,
		idProyecto: 0,
	});
	const dispatch = useDispatch();
	const submit = (e) => {
		e.preventDefault();
		dispatch(newRole(rol)).then(dispatch(getRoles()))
		setRol({
			...rol,
			nombreRol: "",
			descripcion: "",
			actores: 1,
			idProyecto: 0,
		});
		handleClose();
	};
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Create new Role"}
				</DialogTitle>
				<form onSubmit={submit}>
					<DialogContent>
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
									ROLE NAME
								</Typography>

								<TextField
									required
									hiddenLabel
									type="text"
									size="small"
									value={rol.nombreRol}
									className={classes.textField}
									variant="outlined"
									focused
									InputProps={{
										spellCheck: "false",
										style: {
											fontFamily:
												"var(--font-secondary-medium)",
										},
									}}
									onChange={(e) =>
										setRol({
											...rol,
											nombreRol: e.target.value,
											idProyecto: proyecto,
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
									ROLE DESCRIPTION
								</Typography>

								<TextField
									required
									hiddenLabel
									type="text"
									value={rol.descripcion}
									size="small"
									className={classes.textField}
									variant="outlined"
									focused
									InputProps={{
										spellCheck: "false",
										style: {
											fontFamily:
												"var(--font-secondary-medium)",
										},
									}}
									onChange={(e) =>
										setRol({
											...rol,
											descripcion: e.target.value,
											idProyecto: proyecto,
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
									NUMBER OF ACTORS
								</Typography>

								<TextField
									required
									type="number"
									min="1"
									hiddenLabel
									size="small"
									value={rol.actores}
									className={classes.textField}
									variant="outlined"
									focused
									InputProps={{
										inputProps: { min: 1, max: 1000 },
										spellCheck: "false",
										style: {
											fontFamily:
												"var(--font-secondary-medium)",
										},
									}}
									onChange={(e) =>
										e.target.value < 1
											? setRol({
													...rol,
													actores: 1,
													idProyecto: proyecto,
											  })
											: setRol({
													...rol,
													actores: e.target.value,
													idProyecto: proyecto,
											  })
									}
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						{/* <Button onClick={handleClose}>Cancel</Button> */}
						<Button
							className={classes.createStoryButton}
							type="submit"
							variant="contained"
						>
							CREATE
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
};

export default NewRoleForm;
