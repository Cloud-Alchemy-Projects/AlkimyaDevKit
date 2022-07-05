import React from 'react';
import {AccountBox} from './Components/accountBox';
import useStyles from "./styles";
// Eliminar cambios
import Login from '../login/Login';

const Home = () => {
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
            {/* <AccountBox/> */}
            <Login />
        </div>
    )
};

export default Home;
