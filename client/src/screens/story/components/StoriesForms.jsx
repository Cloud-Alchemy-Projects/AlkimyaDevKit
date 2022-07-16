import {React, useState} from 'react'
import useStyles from "../styles"
import { Typography, TextField, Button, Grid } from '@mui/material';

const Stories = () => {

    const classes = useStyles();

    const [story, setStory] = useState({ epic: '', rolPrimario: '', quiero: '', rolSecundario: '', pueda: '', nota: '', projectID: '', story: '' });

    const submit = (e) => {
        e.preventDefault();
        //localStorage.setItem('story', story);
        console.log(story);
    }

    return (

        <div className={classes.mainContainer}>

            <div className={classes.projectsContainer}>
                
                <div className={classes.formsContainer}>

                    <div className={classes.typoContainer}>
                        <Typography className={classes.projectsTypo} variant="h2">New User Story</Typography>
                    </div>

                    <form onSubmit={submit}>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
                            
                            <Grid item xs={12}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Epic</Typography>
                                <TextField hiddenLabel className={classes.textField_Epic} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, epic: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Como... (Rol primario) </Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: 'true', spellCheck: 'false'}} onChange={(e) => setStory({ ...story, rolPrimario: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Quiero</Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: 'true', spellCheck: 'false'}} onChange={(e) => setStory({ ...story, quiero: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Para que... (Rol secundario) </Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, rolSecundario: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Pueda...</Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, pueda: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Nota</Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, nota: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Project ID</Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, projectID: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography align="left" variant="h3" className={classes.formsTypo}>Story</Typography>
                                <TextField hiddenLabel className={classes.textField} variant="outlined" focused InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setStory({ ...story, story: e.target.value })}/>
                            </Grid>

                            <Grid item xs={6}>
                                <Button type="submit" variant="contained" size="large" style={{background: 'black', border: 'none', borderRadius: '10px', color: '#fff'}} sx={{marginTop: '65px', width: '125px'}}>SUBMIT</Button>
                            </Grid>

                        </Grid>
                        
                    </form>

                </div>
                

            </div>

        </div>
    )
}

export default Stories