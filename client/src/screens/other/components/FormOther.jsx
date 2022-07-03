import {React} from "react";
import { TextField, Paper, Box, Button } from "@mui/material";
import useStyles from "../styles";

const FormOther = () => {
	const classes = useStyles();
	return (
        <>
		    <Paper className={classes.paperContainer} elevation={12}>
				<Box className={classes.gridContainer}>
					<TextField variant="outlined" label="test"></TextField>
					<TextField variant="outlined" label="test"></TextField>
					<TextField variant="outlined" label="test"></TextField>
					<TextField variant="outlined" label="test"></TextField>
					<TextField variant="outlined" label="test"></TextField>
				</Box>
                <div className={classes.buttonContainer}>
                    <Button variant="contained">Test</Button>
                    <Button variant="outlined">Test</Button>
                    <Button variant="text">Test</Button>
                </div>
		    </Paper>
        </>	
	);
};

export default FormOther;
