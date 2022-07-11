import React from 'react';
import useStyles from "../styles";
import { useState } from "react";
// import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
import logo from "../../../assets/Images/icono_1.png";
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

    const classes = useStyles();

    const [body, setBody] = useState({ id: '   ', password: '  ' });
    
    const handleChange = event => {

        console.log(event.target.value)
    
        setBody({
            ...body, [event.target.name]: event.target.value
        })

    }

    const onSubmit = () => {
        console.log(body)
    }

    return(
        <>
            <div className={classes.loginPage}>
                
                <img src={logo} alt='logo' className={classes.logoIcon}/>

                <Typography variant="body2" sx={{color: 'white', fontSize: '6em', fontWeight: '600', textAlign: 'left', paddingLeft: '220px', marginTop: '-490px'}}>Timeless</Typography> 
                <Typography variant="body2" sx={{color: 'white', fontSize: '6em', fontWeight: '600', textAlign: 'left', paddingLeft: '235px', marginTop: '-20px'}}>Innovation</Typography>

                <div className={classes.mainContainer}>
                    
                    <Typography align="center" variant="body2" sx={{color: 'white', fontSize: '3em', marginTop: '320px'}}>Alkimya DevKit</Typography> 
                    <Typography align="right" variant="body2" sx={{color: 'white', fontSize: '1.1em', paddingRight: '25px'}}>by Cloud Alchemy</Typography> 

                    <div className={classes.formContainer}>
                        <Typography align="left" variant="body2" sx={{color: 'white', fontSize: '1.2em'}}>ID</Typography>
                        <TextField hiddenLabel variant="filled" InputProps={{ disableUnderline: true, spellCheck: 'false', style: { fontSize: 20, height: 55, borderRadius: 10}}} sx={{marginTop: '5px', marginLeft:'-10px', background: 'white', borderRadius: '10px', width: '325px'}} />

                        <Typography align="left" variant="body2" type="search" sx={{color: 'white', fontSize: '1.2em', marginTop: '40px'}}>Password</Typography>
                        <TextField hiddenLabel variant="filled" type="password" InputProps={{ disableUnderline: true, style: { fontSize: 20, height: 55, borderRadius: 10}}} sx={{marginTop: '5px', marginLeft:'-10px', background: 'white', borderRadius: '10px', width: '325px'}} />

                        <Button variant="contained" size="large" style={{background: 'black', border: 'none', borderRadius: '10px', color: '#fff'}} sx={{marginTop: '40px', marginLeft:'190px', width: '125px'}}>LOG IN</Button>
                    </div>

                </div>

            </div>
        </>
      );
};

export default Login;