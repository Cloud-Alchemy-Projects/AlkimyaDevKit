import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	toolBar: {
		width: "350px",
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "fixed",
		backgroundColor: "#000000",
		flexDirection: "column",
        zIndex: '7'
	},
	mainContainer: {
		width: "100%",
		justifyContent: "center",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	logoContainer: {
		width: "85%",
        display: 'flex',
        alignItems: 'center',
		margin: "30px 0px 60px 0px",
	},
	logoIcon: {
		// <== Aqui se define el estilo del logo
		width: "70px",
	},
	topText: {
		width: "80%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		marginBottom: "70px",
		alignItems: "end",
		justifyContent: "space-between",
	},
	welcomeText: {
        fontSize: '1.4rem !important',
		color: "white",
		textAlign: "center",
        fontWeight: "600 !important",
	},
	avatar: { 
        border: "3px solid #E20074", 
        width: '55px !important', 
        height: '55px !important' 
    },
	buttonsContainer: {
		width: "80%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	buttonMiddle: {
		width: "100%",
        height: '60px',
		textTransform: "none !important",
		justifyContent: "left !important",
		fontSize: "1rem !important",
		marginBottom: "25px !important",
		backgroundColor: "#242424 !important",
		padding: "20px 15px !important",
		borderRadius: "15px !important",
        fontFamily: 'var(--font-secondary-bold) !important'
	},
	bottomContainer: {
		// width: "100%",
		height: "10%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// margin: "150px",
		// paddingBottom: "30px",
		flexDirection: "row",
		// paddingRight: "10px",
	},
}));
