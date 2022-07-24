import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import useStyles from "../styles";
import { AddCircleOutline, Search } from "@mui/icons-material";

const TopBar = ({ color }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<>
			<div className={classes.appBar}>
				<div className={classes.rightContainer}>
					<div className={classes.textToRight}>
						<Typography variant="h5" sx={{ color: color, fontSize: '40px' }}>
							Alkimya{" "}
							<strong className={classes.toPink}>Dev</strong>Kit
						</Typography>
						<Typography variant="caption" sx={{ color: color }}>
							by Cloud Alchemy
						</Typography>
					</div>
				</div>
				<div className={classes.leftContainer}>
					<Button
						className={classes.buttonTop}
						variant="contained"
						startIcon={<AddCircleOutline />}
						onClick={() => {
							history.push("/projects/new");
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
									<Search color="primary" />
								</InputAdornment>
							),
							spellCheck: "false",
							style: {
								fontFamily: "var(--font-secondary-medium)",
								fontSize: "15px",
								borderRadius: "10px",
							},
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
