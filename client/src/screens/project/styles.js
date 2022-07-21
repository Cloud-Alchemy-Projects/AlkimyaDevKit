import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

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
        marginLeft:'16px'
	},
	projectsTypo: {
		color: "#97004D",
		fontWeight: "700 !important",
	},
	formContainer: {
		width: "40vw",
		// height: "100%",
	},
    fieldsContainer: {
        width:'80%',
        display:'flex',
        justifyContent:'space-between'
    },
    fieldWrapper: {
        width:'100%'
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
    selects: {
        widht:'100%',
        fontFamily: 'var(--font-secondary-medium)',
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
            borderColor: '#e20074 !important',
            border: '2px solid'
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
    // Client information
    clientInfoContainer:{
        marginTop: '20px',
        widht:'100%',
        heigth: '100%',
        backgroundColor: 'black',
        borderRadius: '20px',
        display: 'flex',
        paddingBottom: '20px'
    },
    clientInfoFields: {
        width: "100%",
        color: "white !important",
		[`& fieldset`]: {
			// <== cambia el borde de los campos de texto
			borderRadius: 10,
            borderColor: 'white !important',
            color: 'white'
		},
    },
    clientInfoText: {
        color: "white",
		textTransform: "uppercase",
		marginTop: "20px !important",
        fontFamily: "var(--font-secondary-bold) !important"
    }
}));
