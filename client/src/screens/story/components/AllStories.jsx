import React from 'react';
import { Typography, Button, Grid, Box, Paper, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                        </Grid>

                        <Grid item xs={2.5} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            On Deck
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor_2}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                        </Grid>

                        <Grid item xs={2.5} className={classes.paperContainer}>
                            
                            <Typography className={classes.paperTypo} variant="body">
					            Active
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                        </Grid>


                         {/* ULTIMA COLUMNA QUE CONTIENE SOLO UN PAPER */}
                         <Grid item xs={2.5} className={classes.paperContainer}>

                            <Typography className={classes.paperTypo} variant="body">
					            Complete
				            </Typography>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                            <IconButton size="small">
                                <MoreVertIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>
                            
                            <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 2, width: 180, height: 120 } }}>
                                <Paper elevation={2} className={classes.paperColor}/>
                            </Box>

                            <IconButton size="small">
                                <AddIcon fontSize="inherit" sx={{ color: '#959595' }}/>
                            </IconButton>

                        </Grid>

                    </Grid>

                </div>

        </div>
    )
}

export default AllStories