import React from 'react'
import useStyle from '../styles'
import {Button} from '@mui/material'

const BottomBar = () => {
    const classes = useStyle()
    return (
        <div className={classes.bottomBarContainer}>
            <div className={classes.buttonsWrapper}>
                <Button className={classes.buttonBar} variant="contained">Projects</Button>
                <Button className={classes.buttonBar} sx={{marginTop: '20px'}} variant="contained">User Stories</Button>
            </div>
        </div>
    )
}

export default BottomBar