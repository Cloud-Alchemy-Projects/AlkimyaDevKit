import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from "../styles";
import {Typography, TextField, Button} from '@mui/material';
import logo from "../../../assets/images/logo_1.png";

const LoginForm = () => {

    const classes = useStyles();

    const [user, setUser] = useState({ id: '', password: '' });
    const history = useHistory();
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        history.push("/home")
    }

    return(
        <>
            <div className={classes.loginPage}>
                
                <img src={logo} alt='logo' className={classes.logoIcon}/>

                <Typography variant="body2" sx={{color: 'white', fontSize: '6em', fontWeight: '600', textAlign: 'left', paddingLeft: '220px', marginTop: '-490px'}}>Timeless</Typography> 
                <Typography variant="body2" sx={{color: 'white', fontSize: '6em', fontWeight: '600', textAlign: 'left', paddingLeft: '235px', marginTop: '-20px'}}>Innovation</Typography>

                <div className={classes.mainContainer}>
                    
                    <Typography className={classes.textInForm} align="center" variant="body2">Alkimya DevKit</Typography> 
                    <Typography align="right" variant="body2" sx={{color: 'white', fontSize: '1.1em', paddingRight: '25px'}}>by Cloud Alchemy</Typography> 

                    <form className={classes.formContainer} onSubmit={onSubmit}>
                        <Typography align="left" variant="body2" sx={{color: 'white', fontSize: '1.2em'}}>ID</Typography>
                        <TextField hiddenLabel className={classes.textField} variant="filled" InputProps={{ disableUnderline: true, spellCheck: 'false'}} onChange={(e) => setUser({ ...user, id: e.target.value })}/>

                        <Typography align="left" variant="body2" type="search" sx={{color: 'white', fontSize: '1.2em', marginTop: '40px'}}>Password</Typography>
                        <TextField hiddenLabel className={classes.textField} variant="filled" type="password" InputProps={{ disableUnderline: true}} onChange={(e) => setUser({ ...user, password: e.target.value })}/>

                        <Button type="submit" variant="contained" size="large" style={{background: 'black', border: 'none', borderRadius: '10px', color: '#fff'}} sx={{marginTop: '40px', marginLeft:'190px', width: '125px'}}>LOG IN</Button>
                    </form>

                </div>

            </div>
        </>
      );
};

export default LoginForm;