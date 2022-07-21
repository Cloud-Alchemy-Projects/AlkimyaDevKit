import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: { //Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        paddingLeft: "400px"
    },
    typoContainer:{ //Contenedor para el texto New User Story
        width: "100%",
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		paddingTop: "20vh",
		marginBottom: "20px",
    },
    projectsContainer:{ //Contenedor para el BOTON PROJECTS
        width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
        marginTop: '-70px',
		marginBottom: "20px",
    },
    projectsTypo: {
        color: "#97004D",
		fontWeight: "700 !important",
    },
    paperTypo: {
        color: "#242424",
		fontWeight: "600 !important",
        marginRight: '49px !important'
    },
    formsContainer: { //Contenedor para los campos de texto
        width: "45vw",
        height: 'auto',
		paddingBottom: '25px'
    },
    formsContainer_2: { //Contenedor para los campos de texto
        width: "65vw",
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
    },
    paperContainer:{ //ESTE ES EL CONTENEDOR DE LOS CUADROS ROSADOS
        backgroundColor: '#E6E6E6 !important',
        borderRadius: '10px !important',
        height: "100%",
        marginLeft: "25px !important"
    },
    boxContainer:{
        width: "auto !important",
        marginRight: '25px !important', 
        height: "110px !important",
        marginBottom: "5px !important",
        display: 'flex !important',
        displayDirection: 'column !important',
        backgroundColor: '#E20074 !important',
        borderRadius: '10px'
    }
    
}));