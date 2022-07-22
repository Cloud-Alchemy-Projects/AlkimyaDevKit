import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	mainContainer: {
		//Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
		width: "100%",
		height: "100vh",
		backgroundColor: "white",
		paddingLeft: "400px",
	},
	typoContainer: {
		//Contenedor para el texto New Project
		width: "100%",
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		paddingTop: "20vh",
		marginBottom: "20px",
	},
	projectsTypo: {
		color: "#97004D",
		fontWeight: "700 !important",
	},
	formContainer: {
		width: "45vw",
		// height: "100%",
	},
	formsTypo: {
		color: "#97004D",
		textTransform: "uppercase",
		marginTop: "20px !important",
        fontFamily: "var(--font-secondary-bold) !important"
	},
	textField: {
		width: "100%",
		[`& fieldset`]: {
			// <== cambia el borde de los campos de texto
			borderRadius: 10,
		},
	},
	centerButton: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
        marginTop: '30px'
	},
	createProjectButton: {
		background: "black !important",
		padding: '10px 40px !important',
		borderRadius: "10px !important",
        fontFamily: 'var(--font-secondary-bold) !important'
	},
}));
