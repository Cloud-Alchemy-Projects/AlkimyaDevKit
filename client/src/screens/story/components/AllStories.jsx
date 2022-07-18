import React from 'react';
import { Typography, TextField, Button, Grid, Select, MenuItem, FormControl, Box, Paper, Tooltip} from "@mui/material";
import { useHistory } from 'react-router-dom';
import useStyle from "../styles";


const AllStories = () => {

    const classes = useStyle() 
    const history = useHistory()

    const handleClick = () => {
        history.push("/new")
    }

    return (
        <div className={classes.mainContainer}>
            
            <div className={classes.typoContainer}>

                <Typography className={classes.projectsTypo} variant="h4">
					User Stories
				</Typography>

                <Button onClick={handleClick}>
                    New US
                </Button>

			</div>

            <div className={classes.formsContainer_2}>

                    <Grid container justifyContent="space-around" rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
        
                        <Grid item xs={2.5} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            Backlog
				            </Typography>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                        </Grid>

                        <Grid item xs={2.5} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            On Deck
				            </Typography>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor_2}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                        </Grid>

                        <Grid item xs={2.5} className={classes.paperContainer}>
                            
                            <Typography className={classes.paperTypo} variant="body">
					            Active
				            </Typography>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                        </Grid>


                         {/* ULTIMA COLUMNA QUE CONTIENE SOLO UN PAPER */}
                         <Grid item xs={2.5} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            Complete
				            </Typography>
                            
                            <Tooltip title="Add" placement="left-start">
                                <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, width: 180, height: 120 } }}>
                                    <Paper elevation={2} className={classes.paperColor}/>
                                </Box>
                            </Tooltip>

                        </Grid>

                    </Grid>

                </div>

        </div>
    )
}

export default AllStories