import { makeStyles } from "@mui/styles";

import fondo from "../../assets/Images/fondo1.jpg";

export default makeStyles(() => ({
	loginPage: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${fondo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
    imageContainer: {
        width: '100%',
        height: '15vh',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
	logoIcon: {
		// <== Aqui se define el estilo del logo
		width: '100px',
        marginLeft: '20px'
	},
    contentWrapper:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        height: '60%',
        width: '50%',
        // marginTop: '20vh'
    },
    timeText: {
        marginLeft: '120px !important',
        color: 'white',
        fontSize: '5rem !important',
        fontWeight: '600 !important'
    },
    signinForm: {
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent:'center',
    },
	mainContainer: {
		width: "350px",
		height: "85%",
		display: "flex",
		flexDirection: "column",
        justifyContent:'space-evenly',
        alignItems: 'center',
		borderRadius: "0px 0px 20px 20px",
		// position: "fixed",
		// overflow: "hidden",
		backgroundColor: "#E20074",
        paddingTop: '35%'
		// marginLeft: "70%",
	},
    titleInForm:{
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
	formContainer: {
		display: "flex",
		flexDirection: "column",
        width: '80%'
		// marginTop: "110px",
		// marginLeft: "45px",
	},

	textField: {
		marginTop: "5px",
		// marginLeft: "-10px",
		background: "white",
		// width: "325px",
		borderRadius: "5px !important",
		fontSize: "20px",
		// height: "55px",
        fontFamily: "var(--font-secondary-bold) !important"
	},

	textInForm: {
		color: "white",
		fontSize: "2.35rem !important",
		// marginTop: "320px !important",
	},
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));
