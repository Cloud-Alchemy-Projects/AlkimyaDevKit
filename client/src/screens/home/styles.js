import {makeStyles} from "@mui/styles"
import fondo from "../../assets/Images/background-home.jpg"

export default makeStyles(() => ({
    mainContainer: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${fondo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
    },
    homeContainer: {
        width: '100%',
        height: '100%',
        paddingLeft: '500px'
    },
    typoContainer:{
        width: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeTypo: {
        color: 'white',
        fontWeight: '600 !important',
        fontSize: '80px !important'
    }
}));