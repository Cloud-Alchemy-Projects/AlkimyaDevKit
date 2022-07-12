import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: { //Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
        width: "100%",
        height: "100vh",
        backgroundColor: "white"
    },
    projectsContainer: { //Contenedor general para la vista stories
        width: '100%',
        height: '100%',
        paddingLeft: '310px'
    },
    typoContainer:{ //Contenedor para el texto New User Story
        width: '40%',
        height: '20%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingTop: '18%',
        paddingBottom: '5%'
    },
    projectsTypo: {
        color: '#97004D',
        fontWeight: '700 !important',
        fontSize: '40px !important'
    },
    formsContainer: { //Contenedor para los campos de texto
        width: '75%',
        height: '60%',
        paddingLeft: '200px',
        paddingTop: '3%',
        display: "flex",
		flexDirection: "column"
    },
    formsTypo: {
        color: '#97004D',
        fontSize: '1.35em !important',
        fontWeight: '550 !important',
        marginTop: '20px !important'
    },
    textField: {
		marginTop: "15px !important",
		width: "100%",
		height: "55px",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 20,
        },
	},
    textField_Epic: {
		marginTop: "15px !important",
		width: "100%",
		height: "55px",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 20,
        },
	}
    
}));