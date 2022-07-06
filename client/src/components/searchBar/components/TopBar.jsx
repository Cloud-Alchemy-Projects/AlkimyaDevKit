import React from 'react'
import {TextField, Button} from '@mui/material'
import useStyles from '../styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TopBar = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.appBar}>
                <div className={classes.rightContainer}>
                    <div className={classes.textToRight}>
                        <h1 className={classes.h1bar}>Alkimya <strong className={classes.toPink}>Dev</strong>Kit</h1>
                        <h5 className={classes.h5Bar}>by Cloud Alchemy</h5>
                    </div>
                </div>
                <div className={classes.leftContainer}>
                    <Button sx={{marginRight: '20px'}}variant="contained" startIcon={<AddCircleOutlineIcon/>}>New Project</Button>
                    <TextField variant="outlined"></TextField>
                </div>
            </div>
        </>
    )
}

export default TopBar