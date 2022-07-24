import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles";
import { Typography, TextField, Button, Grid } from "@mui/material";
import {newClient} from "../../../actions/client.js"

const ClientForm = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [client, setClient] = useState({
		NombreCliente: "",
		ApellidoPaterno: "",
		ApellidoMaterno: "",
		Telefono: "",
		Correo: "",
		Compania: "",
	});

	const submit = (event) => {
		event.preventDefault();
		dispatch(newClient(client))
		console.log(client);
	};

	return (
		<div className={classes.mainContainer}>
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
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setClient({ ...client, NombreCliente: e.target.value })
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
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
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
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
							InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
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
							
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
                            InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setClient({
									...client,
									Telefono: e.target.value,
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
							Email
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
						<TextField
							
							fullWidth
							hiddenLabel
							size="small"
							className={classes.textField}
							variant="outlined"
							focused
                            InputProps={{spellCheck: "false", style: {fontFamily: 'var(--font-secondary-medium)'}}}
							onChange={(e) =>
								setClient({
									...client,
									Compania: e.target.value,
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

export default ClientForm;
