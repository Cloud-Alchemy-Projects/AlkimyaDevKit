import {React, useState} from 'react'
import useStyles from "../styles"
import { Typography, TextField, Button, Grid } from '@mui/material';

const ProjectsForm = () => {

    const classes = useStyles();
    const [project, setProject] = useState({ name: '', status: '', client: '', attendant: '' });
    // const history = useHistory();
    
    const submit = (event) => {
        event.preventDefault();
        console.log(project)
        // history.push("/projects/new")
    }

    return (
        <div className={classes.mainContainer}>
                
            <div className={classes.formsContainer}>

                <div className={classes.typoContainer}>
                    <Typography className={classes.projectsTypo} variant="h2">New Project</Typography>
                </div>

                <form onSubmit={submit}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Project Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ spellCheck: 'false'}} onChange={(e) => setProject({ ...project, name: e.target.value })}/>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Project Status</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ spellCheck: 'false'}} onChange={(e) => setProject({ ...project, status: e.target.value })}/>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Client's Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{  spellCheck: 'false'}} onChange={(e) => setProject({ ...project, client: e.target.value })}/>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="left" variant="h3" className={classes.formsTypo}>Attendant's Name</Typography>
                            <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ spellCheck: 'false'}} onChange={(e) => setProject({ ...project, attendant: e.target.value })}/>
                        </Grid>

                        <Grid item xs={6}>
                            <Button type="submit" variant="contained" size="large" style={{background: 'black', border: 'none', borderRadius: '10px', color: '#fff'}} sx={{marginTop: '65px', width: '125px'}}>SUBMIT</Button>
                        </Grid>
                    </Grid>
                </form>

            </div>

        </div>
    )
}

export default ProjectsForm