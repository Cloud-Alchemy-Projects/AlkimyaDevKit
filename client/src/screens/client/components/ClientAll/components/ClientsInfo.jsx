import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Typography} from '@mui/material';
import {AddCircleOutline} from "@mui/icons-material"
import useStyles from "../../../styles"
import ClientsTable from "./ClientsTable"

const ClientsInfo = ({clients}) => {
    
    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => {
        history.push("/new")
    }

    return (
        <>
            <div className={classes.typoContainer}>
                <Typography className={classes.projectsTypo} variant="h4">
                    Clients
                </Typography>
                <Button className={classes.newClientButton} variant="contained" onClick={handleClick} startIcon={<AddCircleOutline />}> New Client </Button>
            </div>
            <ClientsTable clients={clients}/>
        </>
    )
}

export default ClientsInfo