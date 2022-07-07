import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import useStyles from "../styles";
import { AddCircleOutline, Search, AccountCircle } from "@mui/icons-material";

const TopBar = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.appBar}>
				<div className={classes.rightContainer}>
					<div className={classes.textToRight}>
						<h1 className={classes.h1bar}>
							Alkimya{" "}
							<strong className={classes.toPink}>Dev</strong>Kit
						</h1>
						<h5 className={classes.h5Bar}>by Cloud Alchemy</h5>
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
