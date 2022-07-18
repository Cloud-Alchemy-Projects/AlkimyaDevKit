import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: { //Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        paddingLeft: "400px"
    },
    projectsContainer: { //Contenedor general para la vista stories
        width: '100%',
        height: '100%',
        paddingLeft: '310px'
    },
    typoContainer:{ //Contenedor para el texto New User Story
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
    formsContainer: { //Contenedor para los campos de texto
        width: "45vw",
        height: 'auto',
		paddingBottom: '25px'
    },
    formsTypo: {
        color: "#97004D",
		textTransform: "uppercase",
		marginTop: "20px !important",
        fontFamily: "var(--font-secondary-bold) !important"
    },
    selectProjectId: {
        fontFamily: 'var(--font-secondary-medium)',
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
            borderColor: '#e20074 !important',
            border: '2px solid'
        },
    },
    textField: {
		width: "100%",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
            borderColor: '#e20074 !important',
            border: '2px solid'
        },
	},
    textField_Epic: {
		width: "100%",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
        },
	},
    lastGrid: {
        height: '100%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection: 'column'
    },
    buttonContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'end'
    },
    createStoryButton: {
        background: "black !important",
        padding: '10px 40px !important',
        borderRadius: "10px !important",
        fontFamily: 'var(--font-secondary-bold) !important'
    }
    
}));