import { makeStyles } from "@mui/styles";

import fondo from "../../assets/images/fondo1.jpg";

export default makeStyles(() => ({
	loginPage: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${fondo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	logoIcon: {
		// <== Aqui se define el estilo del logo
		transform: "scale(0.09)",
		marginLeft: "-440px",
		marginTop: "-450px",
	},

	mainContainer: {
		width: "400px",
		height: "885px",
		display: "flex",
		flexDirection: "column",
		borderRadius: "20px",
		position: "fixed",
		overflow: "hidden",
		backgroundColor: "#E20074",
		marginLeft: "70%",
		marginTop: "-490px",
	},

	formContainer: {
		display: "flex",
		flexDirection: "column",
		marginTop: "110px",
		marginLeft: "45px",
	},

	textField: {
		marginTop: "5px",
		marginLeft: "-10px",
		background: "white",
		borderRadius: "10px",
		width: "325px",
		borderRadius: "10px",
		fontSize: "20px",
		height: "55px",
	},

	textInForm: {
		color: "white",
		fontSize: "3em !important",
		marginTop: "320px !important",
	},
}));
