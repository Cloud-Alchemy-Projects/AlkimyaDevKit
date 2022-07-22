import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../../../styles";
import {
	Typography,
	TextField,
	Button,
	Grid,
	Select,
	MenuItem,
	FormControl,
    IconButton
} from "@mui/material";
import {Add} from '@mui/icons-material';
import { useHistory } from "react-router-dom";
import { newUserStory } from "../../../../../actions/userstories";
import NewRoleForm from "./NewRoleForm";
import NewEpicForm from "./NewEpicForm";
const Form = ({projects, roles, epics}) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const [story, setStory] = useState({
		idProyecto: "",
		epic: "",
		rol: "",
		quiero: "",
		rolSecundario: "",
		pueda: "",
		notaGral: "",
		story: "",
	});

	const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            },
        },
    };

	const handleChange = (event) => {
		setStory({ ...story, idProyecto: event.target.value });
	};
    
    const [openRole, setOpenRole] = useState(false);
    const [openEpic, setOpenEpic] = useState(false);

	const openNewRole = () => {
		setOpenRole(true);
	};
	const openNewEpic = () => {
		setOpenEpic(true);
	};


	const handleCloseRole = () => {
		setOpenRole(false);
	};
	const handleCloseEpic = () => {
		setOpenEpic(false);
	};

    const [rolesSelected, setRolesSelected] = useState({
        rolPrimary: '',
        rolSecondary: ''
    });

    let allStory = `Como ${rolesSelected.rolPrimary}, yo quiero ${story.quiero}, para que ${story.pueda} y entregarsela a ${rolesSelected.rolSecondary}.`;

    useEffect(()=>{
        setStory({...story, story: allStory})
    },[allStory])

    let rolInProject = []
    roles&& (rolInProject = roles.filter((o)=>o.idProyecto===story.idProyecto));
    let epicInProject = []
    epics&& (epicInProject = epics.filter((o)=>o.idProyecto===story.idProyecto));

    const submit = (e) => {
		e.preventDefault();
        setStory({...story, story: allStory})
        dispatch(newUserStory(story))
		history.push("/");
	};

	return (
		<>
            <NewRoleForm open={openRole} handleClose={handleCloseRole} proyecto={story.idProyecto}/>
            <NewEpicForm open={openEpic} handleClose={handleCloseEpic} proyecto={story.idProyecto}/>
			<div className={classes.typoContainer}>

				<Typography className={classes.projectsTypo} variant="h4">
					New User Story
				</Typography>
			</div>

			<form className={classes.formsContainer} onSubmit={submit}>
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
						<FormControl fullWidth size="small">
							<Select
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
                                MenuProps={MenuProps}
								value={story.idProyecto}
								className={classes.selectProjectId}
								onChange={handleChange}
							>
								{projects.map((item, index) => {
									const { IdProyecto, NombreProyecto } = item;
									return (
										<MenuItem
											key={IdProyecto}
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
					</Grid>
					<Grid item xs={12}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							Epic
						</Typography>
						<FormControl fullWidth size="small">
                            <Select
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
                                MenuProps={MenuProps}
								value={story.epic}
								className={classes.selectProjectId}
								onChange={(e) => {
                                    setStory({
									    ...story,
									    epic: e.target.value
								    })
                                }}
							>
                                {story.idProyecto&&
                                    <MenuItem className={classes.newRoleItem}>
                                        <Button className={classes.newRoleButton} onClick={openNewEpic} variant="text" startIcon={<Add/>}>New Epic</Button>
                                    </MenuItem>
                                }
								{
                                    epicInProject.map((item, index) => {
									const { IdEpic, nombreEpic } = item;
									return (
										<MenuItem
											key={IdEpic}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={IdEpic}
										>
											{nombreEpic}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							AS A… (PRIMARY ROLL){" "}
						</Typography>
                        <FormControl fullWidth size="small">
							<Select
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
                                MenuProps={MenuProps}
								value={story.rol}
								className={classes.selectProjectId}
								onChange={(e) => {
                                    setStory({
									    ...story,
									    rol: e.target.value,
									    story: allStory,
								    })
                                    const selectedRolePrimary = roles.find(o=>o.IdRol===e.target.value)
                                    setRolesSelected({...rolesSelected, rolPrimary: selectedRolePrimary.nombreRol})
                                }}
							>
                            {story.idProyecto&&
                                <MenuItem className={classes.newRoleItem}>
                                    <Button className={classes.newRoleButton} onClick={openNewRole} variant="text" startIcon={<Add/>}>New Role</Button>
                                </MenuItem>
                            }
								{rolInProject.map((item, index) => {
									const { IdRol, nombreRol } = item;
									return (
										<MenuItem
											key={IdRol}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={IdRol}
										>
											{nombreRol}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={6}>
						<Typography
							align="left"
							variant="subtitle2"
							className={classes.formsTypo}
						>
							I WANT…
						</Typography>
						<TextField
							required
							hiddenLabel
							multiline
                            maxRows={5}
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
								setStory({
									...story,
									quiero: e.target.value,
									story: allStory,
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
							So that...
						</Typography>
						<TextField
							required
							hiddenLabel
							size="small"
                            multiline
                            maxRows={5}
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
								setStory({
									...story,
									pueda: e.target.value,
									story: allStory,
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
							Deliver to…(SECONDARY ROLL){""}
						</Typography>
                        <FormControl fullWidth size="small">
							<Select
								sx={{
									fontFamily: "var(--font-secondary-medium)",
								}}
                                MenuProps={MenuProps}
								value={story.rolSecundario}
								className={classes.selectProjectId}
								onChange={(e) => {
                                    setStory({
									    ...story,
									    rolSecundario: e.target.value,
									    story: allStory,
								    })
                                    const selectedRoleSecondary = roles.find(o=>o.IdRol===e.target.value)
                                    setRolesSelected({...rolesSelected, rolSecondary: selectedRoleSecondary.nombreRol})
                                }}
							>
                            {story.idProyecto&&
                                <MenuItem className={classes.newRoleItem}>
                                    <Button className={classes.newRoleButton} onClick={openNewRole} variant="text" startIcon={<Add/>}>New Role</Button>
                                </MenuItem>
                            }
								{rolInProject.map((item, index) => {
									const { IdRol, nombreRol } = item;
									return (
										<MenuItem
											key={IdRol}
											sx={{
												fontFamily:
													"var(--font-secondary-medium)",
											}}
											value={IdRol}
										>
											{nombreRol}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={6}>
                        <div className={classes.storyContainer}>
                            <Typography
                                align="left"
                                variant="subtitle2"
                                className={classes.tittleStory}
                            >
                                STORY
                            </Typography>
                            <TextField
                                required
                                value={allStory}
                                hiddenLabel
                                multiline
                                maxRows={15}
                                className={classes.textStory}
                                variant="outlined"
                                focused
                                InputProps={{
                                    readOnly: true,
                                    spellCheck: "false",
                                    style: {
                                        color: 'white',
                                        padding: '0',
                                        fontFamily: "var(--font-secondary-regular)",
                                    },
                                }}
                            />
                        </div>
					</Grid>
					<Grid item xs={6}>
                    <div className={classes.lastField}>

                    
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								ACCEPTANCE CRITERIA
							</Typography>

							<TextField
								required
								hiddenLabel
                                multiline
                                maxRows={10}
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
									setStory({ ...story, notaGral: e.target.value })
								}
							/>
                            </div>
					</Grid>
                    
                    <Grid item xs={12}>
                    <div className={classes.buttonContainer}>

                        <Button
                            className={classes.createStoryButton}
                            type="submit"
                            variant="contained"
                        >
                            CREATE
                        </Button>
                    </div>
					</Grid>
				</Grid>
			</form>
        </>
	);
};

export default Form;
