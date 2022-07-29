import React, {useEffect, useState} from 'react';
import { Typography, Button, Grid, Box, IconButton, Select, MenuItem, FormControl, Paper, Divider} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import useStyle from "../styles";
import {getUserStories} from "../../../actions/userstories.js"


const AllStories = ({allBlacklog, allOndeck, allActive, allComplete}) => {

    const classes = useStyle() 
    const history = useHistory()
    const dispatch = useDispatch()

    const userstories = useSelector(state => state.userstories)
    useEffect(() => {
        dispatch(getUserStories())
    },[])

    // Recibir datos de todos los proyectos
    const handleClick = () => {
        history.push("/new")
    }

    //Constante para el formulario de Project's Name
    const [story, setStory] = useState({
        projectId: ""
	});
    const handleChange = (event) => {
        setStory( { ...story, projectId: event.target.value});
    };
    const projectNames = [{id: 1, projectName: "Alkimya DevKit"}, {id: 2, projectName: "Vinculación de prácticas"}]

    //Deficion del arreglo y el uso de .find para clasificar los ID de las UserStories
    let blacklog = []
    allBlacklog&& (blacklog = allBlacklog.find((o) => o.Estatus === story.projectId));
    let ondeck = []
    allOndeck&& (ondeck = allOndeck.find((o) => o.Estatus === story.projectId));
    let active = []
    allActive&& (active = allActive.find((o) => o.Estatus === story.projectId));
    let complete = []
    allComplete&& (complete = allComplete.find((o) => o.Estatus === story.projectId));
    


    return (
        <div className={classes.mainContainer}>
            
            {/* {(allUsers && allClients) === undefined ? PONER TODO ESTO Y MOVER FUERA DE ALLSTORIES.JSX
				<div className={classes.circularContainer}>
					<CircularProgress />
				</div>
			: 
				<Form allUsers={allUsers} allClients={allClients} />
			} */}

                                    {/* return ( AGREGAR TODO ESTO DENTRO DEL BOX
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
									); */}

            <div className={classes.typoContainer}>

                <Typography className={classes.projectsTypo} variant="h4">
					User Stories
				</Typography>

                <Button onClick={handleClick}>
                    New US
                </Button>

			</div>

            <div className={classes.projectsContainer}>

                <Paper component="form" sx={{display: "flex", alignItems: "center", width: 320, height: 40, backgroundColor: "#97004D"}} >
                    <Typography sx={{fontFamily: 'var(--font-secondary-thin)', color: "white", marginLeft: '10px' }}  >
					    PROJECT
				    </Typography>

                    <Divider sx={{ marginLeft: '10px',background: "white" }} orientation="vertical"/>

                    <FormControl fullWidth>

                    <Select sx={{fontFamily: 'var(--font-secondary-thin)', color: "white" }} value={story.projectId} className={classes.selectProjectId_2} onChange={handleChange} 
                    inputProps={{
                        classes: {
                            icon: classes.icon,
                            root: classes.root,
                        },
                    }}>
                        {projectNames.map((item, index) => {
                            const { id, projectName } = item;
                            return (
                                <MenuItem key={id} sx={{fontFamily: 'var(--font-secondary-medium)' }} value={id}>{projectName}</MenuItem>
                            )
                        })}
                    </Select>
                    </FormControl>
                </Paper>

            </div>

            <div className={classes.formsContainer_2}>

                    <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        
                        {/* PRIMERA COLUMNA QUE CONTIENE 3 */}
                        <Grid item xs={2} md={2} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            Backlog
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }} />
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>

                            <Button size="small" sx={{ color: '#959595', textTransform: "capitalize", fontSize: "12px"  }} startIcon={<AddIcon sx={{ color: '#959595' }}/>}>
                                New Card
                            </Button>

                        </Grid>

                        {/* SEGUNDA COLUMNA QUE CONTIENE 4 */}
                        <Grid item xs={2} md={2} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            On Deck
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box className={classes.boxContainer} sx={{ opacity: '50%' }}/>
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>

                            <Button size="small" sx={{ color: '#959595', textTransform: "capitalize", fontSize: "12px"  }} startIcon={<AddIcon sx={{ color: '#959595' }}/>}>
                                New Card
                            </Button>

                        </Grid>

                        {/* TERCERA COLUMNA QUE CONTIENE 2 */}
                        <Grid item xs={2} md={2} className={classes.paperContainer}>
                            
                            <Typography className={classes.paperTypo} variant="body"> 
					            Active           
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>

                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>

                            <Button size="small" sx={{ color: '#959595', textTransform: "capitalize", fontSize: "12px"  }} startIcon={<AddIcon sx={{ color: '#959595' }}/>}>
                                New Card
                            </Button>

                        </Grid>


                         {/* ULTIMA COLUMNA QUE CONTIENE 1 */}
                         <Grid item xs={2} md={2} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            Complete
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>
                            
                            <Box className={classes.boxContainer} sx={{ opacity: '20%' }}/>

                            <Button size="small" sx={{ color: '#959595', textTransform: "capitalize", fontSize: "12px"  }} startIcon={<AddIcon sx={{ color: '#959595' }}/>}>
                                New Card
                            </Button>

                        </Grid>

                    </Grid>

                </div>

        </div>
    )
}

export default AllStories