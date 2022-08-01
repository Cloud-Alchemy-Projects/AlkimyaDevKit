import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Typography,
	TextField,
} from "@mui/material";
import useStyles from "../../../styles";
import { useDispatch } from "react-redux";
import { newCompany, getCompanies } from "../../../../../actions/clients";

const NewCompanyForm = ({ open, handleClose }) => {
	const classes = useStyles();

	const [company, setCompany] = useState({
		nombreCompania: "",
	});

	const dispatch = useDispatch();
	const submit = (e) => {
		e.preventDefault();
		dispatch(newCompany(company)).then(dispatch(getCompanies()));
		setCompany({ ...company, nombreCompania: "" });
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
					{"Create new Company"}
				</DialogTitle>
				<form onSubmit={submit}>
					<DialogContent>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypoNewCompany}
						>
							Company name
						</Typography>

						<TextField
							required
							hiddenLabel
							type="text"
							size="small"
							value={company.nombreCompania}
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{
								spellCheck: "false",
								style: {
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
							onChange={(e) =>
								setCompany({
									...company,
									nombreCompania: e.target.value,
								})
							}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
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

export default NewCompanyForm;
