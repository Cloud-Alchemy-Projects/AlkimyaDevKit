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
		marginLeft: "16px",
	},
	projectsTypo: {
		color: "#97004D",
		fontWeight: "700 !important",
	},
	formContainer: {
		width: "40vw",
		paddingBottom: "20px",
	},
	fieldsContainer: {
		width: "80%",
		display: "flex",
		justifyContent: "space-between",
	},
	fieldWrapper: {
		width: "100%",
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
	selects: {
		widht: "100%",
		fontFamily: "var(--font-secondary-medium)",
		[`& fieldset`]: {
			// <== cambia el borde de los campos de texto
			borderRadius: 10,
			borderColor: "#e20074 !important",
			border: "2px solid",
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
	// Styles for -AllProjects-
	projectContainer: {
		width: "100%",
		display: "flex",
		paddingTop: "20vh",
		marginBottom: "20px",
		flexDirection: "column",
	},
	selectContainer: {
		width: "350px",
	},
	selectAllProjects: {
		[`& fieldset`]: {
			border: "none",
		},
		[`& svg`]: {
			color: "white",
		},
		[`& div`]: {
			borderRadius: "15px !important",
		},
		[`& .MuiInputBase-input`]: {
			borderRadius: "15px",
			color: "white !important",
			fontWeight: "600",
			fontSize: "25px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "#97004D !important",
			borderColor: "#97004D !important",
		},
	},
	projectCardContainer: {
		width: "80%",
		margin: "30px 0px",
	},
	cardProject: {
		backgroundColor: "#E6E6E6",
		borderRadius: "16px",
		width: "350px",
		height: "262px",
		display: "flex",
        flexDirection: 'column',
        justifyContent: 'flex-end'
	},
	cardProjectDetails: {
		height: "55px",
		background: "black",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderBottomLeftRadius: "16px",
		borderBottomRightRadius: "16px",
	},
    cardsTypo:{
        color: 'white !important',
        fontSize: '20px !important',
        fontWeight: '600 !important'
    },
    projectStatus:{
        borderRadius: '50%',
        background: '#FFC422',
        width: '15px',
        height: '15px',
        marginLeft: '15px',
    },
	// Client information
	clientInfoContainer: {
		marginTop: "20px",
		widht: "100%",
		heigth: "100%",
		backgroundColor: "black",
		borderRadius: "20px",
		display: "flex",
		paddingBottom: "20px",
	},
	clientInfoFields: {
		width: "100%",
		color: "white !important",
		[`& fieldset`]: {
			// <== cambia el borde de los campos de texto
			borderRadius: 10,
			borderColor: "white !important",
			color: "white",
		},
	},
	clientInfoText: {
		color: "white",
		textTransform: "uppercase",
		marginTop: "20px !important",
		fontFamily: "var(--font-secondary-bold) !important",
	},
}));
