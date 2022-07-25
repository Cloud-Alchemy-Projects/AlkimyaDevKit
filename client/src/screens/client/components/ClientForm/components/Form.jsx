import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
	Typography,
	TextField,
	Button,
	Grid,
	FormControl,
	Select,
	MenuItem,
	Input,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { newClient } from "../../../../../actions/clients";
import useStyles from "../../../styles";
import NewCompanyForm from "./NewCompanyForm";

const Form = ({ companies }) => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [client, setClient] = useState({
		NombreCliente: "",
		ApellidoPaterno: "",
		ApellidoMaterno: "",
		Telefono: "",
		Correo: "",
		Compania: "",
	});
	const [openCompany, setOpenCompany] = useState(false);

	const openNewCompany = () => {
		setOpenCompany(true);
	};
	const handleCloseCompany = () => {
		setOpenCompany(false);
	};

	const submit = (event) => {
		event.preventDefault();
		dispatch(newClient(client));
		history.push("/");
	};
	return (
		<>
			<NewCompanyForm
				open={openCompany}
				handleClose={handleCloseCompany}
			/>
			<div className={classes.typoContainer}>
				<Typography className={classes.projectsTypo} variant="h4">
					New Client
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
							Client Name
						</Typography>
						<TextField
							required
							hiddenLabel
							size="small"
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
								setClient({
									...client,
									NombreCliente: e.target.value,
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
							Paternal Surname
						</Typography>
						<TextField
							required
							fullWidth
							hiddenLabel
							size="small"
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
								setClient({
									...client,
									ApellidoPaterno: e.target.value,
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
							Maternal Surname
						</Typography>
						<TextField
							required
							fullWidth
							hiddenLabel
							size="small"
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
								setClient({
									...client,
									ApellidoMaterno: e.target.value,
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
							Phone Number
						</Typography>
						<TextField
							required
							type="text"
                            value={client.Telefono}
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{
								spellCheck: "false",
								style: {
									color: "black",
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
							onChange={(e) => {
                                const result = e.target.value.replace(/\D/g, '');
								setClient({
									...client,
									Telefono: result,
								});
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Email
						</Typography>
						<TextField
							required
							type="email"
							fullWidth
							hiddenLabel
							size="small"
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
								setClient({
									...client,
									Correo: e.target.value,
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
							Company
						</Typography>
						<FormControl fullWidth size="small">
							<Select
								required
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
								MenuProps={MenuProps}
								value={client.Compania}
								className={classes.selectProjectId}
								onChange={(e) => {
									setClient({
										...client,
										Compania: e.target.value,
									});
								}}
							>
								<MenuItem className={classes.newRoleItem}>
									<Button
										className={classes.newRoleButton}
										onClick={openNewCompany}
										variant="text"
										startIcon={<Add />}
									>
										New Company
									</Button>
								</MenuItem>

								{companies.map((item, index) => {
									const { IdCompania, nombreCompania } = item;
									return (
										<MenuItem
											key={IdCompania}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={IdCompania}
										>
											{nombreCompania}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
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
		</>
	);
};

export default Form;
