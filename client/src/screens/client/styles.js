import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	mainContainer: {
		//Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
		width: "100%",
		height: "100vh",
		backgroundColor: "white",
		paddingLeft: "400px",
	},
	circularContainer: {
		//Contenedor general para la vista stories
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
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
		fontFamily: "var(--font-secondary-bold) !important",
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
		marginTop: "30px",
	},
	createProjectButton: {
		background: "black !important",
		padding: "10px 40px !important",
		borderRadius: "10px !important",
		fontFamily: "var(--font-secondary-bold) !important",
	},
	selectProjectId: {
		fontFamily: "var(--font-secondary-medium)",
		[`& fieldset`]: {
			// <== cambia el borde de los campos de texto
			borderRadius: 10,
			borderColor: "#e20074 !important",
			border: "2px solid",
		},
	},
	newRoleItem: {
		display: "flex",
		justifyContent: "center",
		padding: "0 !important",
	},
	newRoleButton: {
		width: "100% !important",
		height: "100% !important",
		padding: "0 !important",
		fontFamily: "var(--font-secondary-bold) !important",
	},
	// All clients styles
	newClientButton: {
		marginLeft: "50px !important",
		background: "black !important",
		padding: "10px !important",
		borderRadius: "10px !important",
		fontFamily: "var(--font-secondary-bold) !important",
	},
    tableContainer: {
        borderRadius: '20px !important',
		width: "50%",
        // padding: '10px',
		maxWidth: "800px",
        maxHeight: '500px',
        marginTop: "40px",
        height: '60%',
        overflow: 'hidden',
        // border: "solid 1.5px #E20074 !important",
	},
	tableCell: {
        backgroundColor: "black !important",
		color: "white !important",
		fontWeight: "600 !important",
        paddingLeft:"30px !important",
	},

}));
