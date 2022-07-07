import React from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import useStyles from "../styles";
import { AddCircleOutline, Search, AccountCircle } from "@mui/icons-material";

const TopBar = ({color}) => {
	const classes = useStyles();

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
						sx={{ marginRight: "20px" }}
						variant="contained"
						startIcon={<AddCircleOutline />}
					>
						New Project
					</Button>
					<TextField     
						id="search-textfield"
                        size="small"
                        color="primary"
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
