import React from "react";
import useStyles from "../../../styles";
import { Grid, TextField, Typography } from "@mui/material";

const ClientInformation = ({ client }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.clientInfoContainer}>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 1, md: 1 }}
				>
					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.clientInfoText}
						>
							Client Name
						</Typography>
						<TextField
                            value={`${client.NombreCliente} ${client.ApellidoPaterno} ${client.ApellidoMaterno}`}
							hiddenLabel
							size="small"
							className={classes.clientInfoFields}
							variant="outlined"
							focused
							InputProps={{
								readOnly: true,
								spellCheck: "false",
								style: {
									color: "white",
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
						/>
					</Grid>
					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.clientInfoText}
						>
							Company
						</Typography>
						<TextField
							value={client.nombreCompania}
							hiddenLabel
							size="small"
							className={classes.clientInfoFields}
							variant="outlined"
							focused
							InputProps={{
								spellCheck: "false",
								style: {
									color: "white",
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
						/>
					</Grid>
					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.clientInfoText}
						>
							Phone Number
						</Typography>
						<TextField
                            value={client.telefono}
							hiddenLabel
							size="small"
							className={classes.clientInfoFields}
							variant="outlined"
							focused
							style={{ color: "white" }}
							InputProps={{
								readOnly: true,
								spellCheck: "false",
								style: {
									color: "white",
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
						/>
					</Grid>
					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.clientInfoText}
						>
							E-mail
						</Typography>
						<TextField
							hiddenLabel
                            value={client.correo}
							size="small"
							className={classes.clientInfoFields}
							variant="outlined"
							focused
							InputProps={{
								readOnly: true,
								spellCheck: "false",
								style: {
									color: "white",
									fontFamily: "var(--font-secondary-medium)",
								},
							}}
						/>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default ClientInformation;
