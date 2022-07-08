import {makeStyles} from "@mui/styles"

import fondo from "./Images/fondo_1.jpg"


export default makeStyles( theme => ({
   
    mainContainer: {
        backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
    },

    logoIcon: { // <== Aqui se define el estilo del logo
		transform: 'scale(0.032)',
		marginLeft: '-1680px',
		marginTop: '-1690px'
	},

    mainTittle:{
        color: '#fff',
        fontWeight: '500',
        fontSize: '3.8em',
        lineHeight: '1.14',
        zIndex: '10',
        marginLeft: '150px',
        marginTop: '240px',
        textAlign: 'right',
        letterSpacing: '2.2px'
    },

    mainTittle_02:{
        color: '#fff',
        fontWeight: '500',
        fontSize: '5.8em',
        lineHeight: '1.14',
        zIndex: '10',
        marginLeft: '-335px',
        marginTop: '340px',
        textAlign: 'right',
        letterSpacing: '2.2px'
    },

    container: { // <== Este contenedor es el principal, el que contiene todos los elementos (Titulo, Subtitulo, Email, Password, Inputs y Button)
		marginTop: theme.spacing(-5),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},

    div: { // <== Aqui se define la division de la pagina
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
	},

	form: { // <== Aqui se define el area del formato (Email y Password)
		width: '100%',
		marginTop: theme.spacing(15)
	},

    container_1: { // <== Este contenedor sera en que este por detras del TextField
		opacity: '1',
		height: '45px',
		backgroundColor: 'white',
		borderRadius: '100px', // <== Permite que tengamos bordes curvos del cuadro de texto
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			width: '100%',
			height: '100%'
		}
	},

    button: { // <== Aqui se define el boton de LOG IN
		width: '40%'
	},



}));