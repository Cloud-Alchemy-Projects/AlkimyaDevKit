import React, {useState} from "react";
import { useHistory, NavLink, Redirect } from "react-router-dom";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import useStyles from "../styles";
import { AddCircleOutline, Search } from "@mui/icons-material";

const TopBar = ({ color, project }) => {
	const classes = useStyles();
	const history = useHistory();
    // const [click, setClick] = useState(false);
    
	return (
		<>
        {/* {click && <Redirect to="projects/new" replace={true}/>} */}
			<div className={classes.appBar}>
				<div className={classes.rightContainer}>
					<div className={classes.textToRight}>
						<Typography variant="h5" sx={{ color: color, fontSize: '30px' }}>
							Alkimya{" "}
							<strong className={classes.toPink}>Dev</strong>Kit
						</Typography>
						<Typography variant="caption" sx={{ color: color }}>
							by Cloud Alchemy
						</Typography>
					</div>
				</div>
				<div className={classes.leftContainer}>
                {/* <NavLink strict to="projects/new"> */}
					<Button
						className={classes.buttonTop}
						variant="contained"
						startIcon={<AddCircleOutline />}
						onClick={() => {
							history.push("/projects/new");
                            // setClick(true)
                            project && (window.location.reload())
						}}
					>
						New Project
					</Button>
                    {/* </NavLink> */}
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
