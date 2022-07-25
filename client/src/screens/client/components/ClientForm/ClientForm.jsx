import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import useStyles from "../../styles";
import Form from "./components/Form";
import { getCompanies } from "../../../../actions/clients";

const ClientForm = () => {
	const classes = useStyles();
    const dispatch = useDispatch();
    const companies = useSelector((state)=>state.client.fetchAllCompanies)

    useEffect(()=>{
        dispatch(getCompanies())
    },[])
    
	return (
		<div className={classes.mainContainer}>
        {(companies)===undefined?
            <div className={classes.circularContainer}>
                <CircularProgress />
            </div>
            :
                <Form companies={companies}/>
            }
		</div>
	);
};

export default ClientForm;
