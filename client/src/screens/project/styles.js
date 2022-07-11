import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: { //Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
        width: "100%",
        height: "100vh",
        backgroundColor: "white"
    },
    projectsContainer: { //Contenedor general para la vista projects
        width: '100%',
        height: '100%',
        paddingLeft: '310px'
    },
    typoContainer:{ //Contenedor para el texto New Project
        width: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        paddingTop: '210px',
        marginBottom: '-650px'
    },
    projectsTypo: {
        color: '#97004D',
        fontWeight: '700 !important',
        fontSize: '40px !important'
    },
    formsContainer: { //Contenedor para los campos de texto
        width: '70%',
        height: '70%',
        paddingLeft: '200px',
        paddingTop: '25px',
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
		width: "395px",
		height: "55px",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 20,
          },
	}
    
}));