import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles";
import { Typography, TextField, Button } from "@mui/material";
import logo from "../../../assets/Images/logo_1.png";
import { signin } from "../../../actions/auth";

const LoginForm = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [user, setUser] = useState({ id: "", password: "" });
	const history = useHistory();
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(signin(user, history));
	};

	return (
		<>
			<div className={classes.loginPage}>
				<div className={classes.imageContainer}>
					<img src={logo} alt="logo" className={classes.logoIcon} />
				</div>
				<div className={classes.contentWrapper}>
					<div className={classes.textContainer}>
						<Typography className={classes.timeText} variant="h1">
							Timeless Innovation
						</Typography>
					</div>
					<div className={classes.signinForm}>
						<div className={classes.mainContainer}>
							<div className={classes.titleInForm}>
								<Typography
									className={classes.textInForm}
									align="center"
									variant="h3"
								>
									Alkimya DevKit
								</Typography>
								<Typography
									align="right"
									variant="body2"
									sx={{
										color: "white",
										// fontSize: "1.1em",
									}}
								>
									by Cloud Alchemy
								</Typography>
							</div>

							<form
								className={classes.formContainer}
								onSubmit={onSubmit}
							>
								<Typography
									align="left"
									variant="button"
									sx={{
										color: "white",
										// fontSize: "1.2em",
										fontFamily: "var(--font-secondary-medium)",
									}}
								>
									ID
								</Typography>
								<TextField
                                    size="small"
									hiddenLabel
									className={classes.textField}
									variant="filled"
                                    InputProps={{
                                        disableUnderline: true,
                                        spellCheck: "false",
                                        style: {fontFamily: 'var(--font-secondary-medium)'}
								    }}
									onChange={(e) =>
										setUser({ ...user, id: e.target.value })
									}
								/>

								<Typography
									align="left"
									variant="button"
									type="search"
									sx={{
										color: "white",
									    textTransform: "none",
										marginTop: "40px",
										fontFamily:
											"var(--font-secondary-medium)",
									}}
								>
									Password
								</Typography>
								<TextField
                                    size="small"
									hiddenLabel
									className={classes.textField}
									variant="filled"
									type="password"
									InputProps={{
                                        disableUnderline: true,
                                        spellCheck: "false",
                                        style: {fontFamily: 'var(--font-secondary-medium)'}
								    }}
									onChange={(e) =>
										setUser({
											...user,
											password: e.target.value,
										})
									}
								/>
                                <div className={classes.buttonContainer}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        style={{
                                            background: "black",
                                            border: "none",
                                            borderRadius: "10px",
                                            color: "#fff",
                                        }}
                                        sx={{
                                            marginTop: "40px",
                                            // marginLeft: "200px",
                                            width: "125px",
                                            fontFamily: "var(--font-secondary-bold)"
                                        }}
                                    >
                                        LOG IN
                                    </Button>
                                </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
