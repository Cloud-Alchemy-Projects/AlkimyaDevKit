import { React, useState } from "react";
import useStyles from "../../../styles";
import { useDispatch } from "react-redux";
import {
	Typography,
	TextField,
	Button,
	Grid,
	FormControl,
	Select,
	MenuItem,
} from "@mui/material";
import { createProject } from "../../../../../actions/projects";
import ClientInformation from "./ClientInformation";
import DialogInfo from "../../../../../components/DialogInfo/DialogInfo";

const Form = ({allUsers, allClients}) => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;

	const classes = useStyles();
	const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [projectMessage, setProjectMessage] = useState("");
	const [project, setProject] = useState({
        name: "",
		status: "",
		client: "",
		attendant: "",
	});
    
    let client = []
    allClients&& (client = allClients.find((o) => o.idCliente === project.client));
    let attendant = [];
    allUsers&& (attendant = allUsers.find((o) => o.IdUsuario === project.attendant));

	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};
    
	const submit = (event) => {
		event.preventDefault();
        setProjectMessage(`Do you want to create the project "${project.name}" for the client ${client.NombreCliente} ${client.ApellidoPaterno} ${client.ApellidoMaterno}, the attendant of the project will be ${attendant.NombreUsuario} ${attendant.ApellidoPaterno} ${attendant.ApellidoMaterno}`)
        setOpen(true);
	};

    const handleClose = () => {
        setOpen(false);
    };
	return (
		<>
            <DialogInfo open={open} handleClose={handleClose} tittle="Project creation" message={projectMessage} create={() => dispatch(createProject(project))}/>
			<div className={classes.typoContainer}>
				<Typography className={classes.projectsTypo} variant="h4">
					New Project
				</Typography>
			</div>

			<form className={classes.formContainer} onSubmit={submit}>
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
							className={classes.formsTypo}
						>
							Project Name
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
							onChange={(e) => {
								setProject({
									...project,
									name: e.target.value,
								});
							}}
						/>
					</Grid>

					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Project Status
						</Typography>
						<FormControl fullWidth size="small">
							<Select
                                required
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
								MenuProps={MenuProps}
								value={project.status}
								className={classes.selects}
								onChange={(e) =>
									setProject({
										...project,
										status: e.target.value,
									})
								}
							>
								<MenuItem
									sx={{
										fontFamily:
											"var(--font-secondary-medium)",
									}}
									value={1}
								>
									En espera
								</MenuItem>
								<MenuItem
									sx={{
										fontFamily:
											"var(--font-secondary-medium)",
									}}
									value={2}
								>
									En planeación
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Client's Name
						</Typography>
						<FormControl fullWidth size="small">
							<Select
                                required
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
								MenuProps={MenuProps}
								value={project.client}
								className={classes.selects}
								onChange={(e) =>
									setProject({
										...project,
										client: e.target.value,
									})
								}
							>
								{allClients.map((item, index) => {
									const {
										idCliente,
										NombreCliente,
										ApellidoPaterno,
									} = item;
									return (
										<MenuItem
											key={idCliente}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={idCliente}
										>
											{`${NombreCliente} ${ApellidoPaterno}`}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={5.7}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Attendant's Name
						</Typography>
						<FormControl fullWidth size="small">
							<Select
                                required
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
								MenuProps={MenuProps}
								value={project.attendant}
								className={classes.selects}
								onChange={(e) =>
									setProject({
										...project,
										attendant: e.target.value,
									})
								}
							>
								{allUsers.map((item, index) => {
									const {
										IdUsuario,
										NombreUsuario,
										ApellidoPaterno,
									} = item;
									return (
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
									);
								})}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				{project.client !== "" && (
					<ClientInformation client={client} />
				)}
				<div className={classes.centerButton}>
					<Button
						type="submit"
						variant="contained"
						className={classes.createProjectButton}
					>
						Create
					</Button>
				</div>
			</form>
        </>
	);
};

export default Form;
