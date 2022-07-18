import React from 'react';
import { Button } from '@mui/material';
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
            <Button onClick={handleClick}>New US</Button>
        </div>
    )
}

export default AllStories