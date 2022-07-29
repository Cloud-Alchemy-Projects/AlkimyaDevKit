import React from "react";
import { Typography, IconButton, Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Add, MoreVert } from "@mui/icons-material";
import useStyles from "../../../styles";

const ColumnStatus = ({ statusType, data }) => {
	const classes = useStyles();
	const history = useHistory();
	// Recibir datos de todos los proyectos
	const handleClick = () => {
		history.push("/new");
	};
	return (
		<>
			<div className={classes.columnInfo}>
				<div className={classes.topContainer}>
					<Typography className={classes.columnTypo} variant="body1">
						{statusType}
					</Typography>
					<div className={classes.buttonTopContainer}>
						<IconButton size="small">
							<Add fontSize="inherit" sx={{ color: "#959595" }} />
						</IconButton>

						<IconButton size="small">
							<MoreVert
								fontSize="inherit"
								sx={{ color: "#959595" }}
							/>
						</IconButton>
					</div>
				</div>

				{data.map((item, index) => {
					const { story } = item;
					return (
						<div className={classes.boxContainer} key={index}>
							<Typography
								className={classes.textInBox}
								variant="body1"
							>
								{story}
							</Typography>
						</div>
					);
				})}

				<div className={classes.bottomContainer}>
					<Button
						size="small"
						sx={{
							color: "#959595",
							textTransform: "capitalize",
							fontSize: "15px",
							fontFamily:
								"var(--font-secondary-medium) !important",
						}}
						onClick={handleClick}
						startIcon={<Add sx={{ color: "#959595" }} />}
					>
						New Card
					</Button>
				</div>
			</div>
		</>
	);
};

export default ColumnStatus;
