import {React} from 'react'
import useStyles from "./styles"
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import { Typography, TextField, Button, Grid } from '@mui/material';

const Projects = () => {

    const classes = useStyles();

    return (

        <div className={classes.mainContainer}>

            <ToolsBar user="User"/>
            <SearchBar color="black"/>

            <div className={classes.projectsContainer}>

                <div className={classes.typoContainer}>
                    <Typography className={classes.projectsTypo} variant="h2">New Project</Typography>
                </div>
                
                <div className={classes.formsContainer}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Project ID</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Project Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Project Status</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Client's Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>User's Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} />
                        </Grid>

                        <Grid item xs={6}>
                            <Button type="submit" variant="contained" size="large" style={{background: 'black', border: 'none', borderRadius: '10px', color: '#fff'}} sx={{marginTop: '65px', width: '125px'}}>SUBMIT</Button>
                        </Grid>

                    </Grid>

                </div>
                

            </div>

        </div>
    )
}

export default Projects