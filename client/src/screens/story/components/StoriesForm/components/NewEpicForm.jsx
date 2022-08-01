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
import { newEpic, getEpics } from "../../../../../actions/userstories";

const NewEpicForm = ({ open, handleClose, proyecto }) => {
	const classes = useStyles();
	const [epic, setEpic] = useState({
		nombreEpic: "",
		descripcion: "",
		idProyecto: 0,
	});
	const dispatch = useDispatch();
	const submit = (e) => {
		e.preventDefault();
		dispatch(newEpic(epic)).then(dispatch(getEpics()))
		
		setEpic({ ...epic, nombreEpic: "", descripcion: "", idProyecto: 0 });
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
					{"Create new Epic"}
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
									EPIC NAME
								</Typography>

								<TextField
									required
									hiddenLabel
									type="text"
									size="small"
									value={epic.nombreEpic}
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
										setEpic({
											...epic,
											nombreEpic: e.target.value,
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
									EPIC DESCRIPTION
								</Typography>

								<TextField
									required
									hiddenLabel
									type="text"
									value={epic.descripcion}
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
										setEpic({
											...epic,
											descripcion: e.target.value,
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

export default NewEpicForm;
