import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import useStyle from "../styles";

const ClientAll = () => {
    const classes = useStyle() 
    const history = useHistory()

    const handleClick = () => {
        history.push("/new")
    }

    return (
        <div className={classes.mainContainer}>
            <Button onClick={handleClick}>New Client</Button>
        </div>
    )
}

export default ClientAll