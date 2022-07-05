import React from 'react';
// import {AccountBox} from './Components/accountBox';
import useStyles from "./styles";

const Home = () => {
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
            {/* <AccountBox/> */}
        </div>
    )
};

export default Home;
