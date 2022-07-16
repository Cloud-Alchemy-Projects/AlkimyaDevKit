import React from "react";
import { useHistory } from 'react-router-dom';
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import useStyles from "../styles";
import { AddCircleOutline, Search } from "@mui/icons-material";

const TopBar = ({color}) => {
	const classes = useStyles();
    const history = useHistory();

	return (
		<>
			<div className={classes.appBar}>
				<div className={classes.rightContainer}>
					<div className={classes.textToRight}>
                        <Typography variant="h4" sx={{color: color}}>
                            Alkimya{" "}
                            <strong className={classes.toPink}>Dev</strong>Kit
                        </Typography>
                        <Typography variant="body2" sx={{color: color}}>by Cloud Alchemy</Typography>                    
					</div>
				</div>
				<div className={classes.leftContainer}>
					<Button
                        className={classes.buttonTop}
						variant="contained"
						startIcon={<AddCircleOutline />}
                        onClick={() => {
                            history.push("/projects")
                        }}
					>
						New Project
					</Button>
					<TextField   
                        className={classes.textField}
						id="search-textfield"
                        size="small"
						placeholder="Search..."
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search color="primary"/>
								</InputAdornment>
							),
						}}
						variant="outlined"
                        focused
					/>
				</div>
			</div>
		</>
	);
};

export default TopBar;
