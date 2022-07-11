import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	toolBar: {
		width: "410px",
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		backgroundColor: "#000000",
		flexDirection: "column",
	},
	logoContainer: {
		width: "85%",
		height: "40%",
		margin: "30px 0px 60px 0px",
	},
	logoIcon: {
		// <== Aqui se define el estilo del logo
		width: "100px",
		// transform: 'scale(0.1)',
		// marginLeft: '-280px',
		// marginTop: '-450px'
	},

	mainContainer: {
		width: "100%",
		// marginLeft: '-5px',
		// marginTop: '-550px',
		justifyContent: "center",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	topText: {
		width: "80%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		marginBottom: "90px",
		alignItems: "end",
		justifyContent: "space-between",
	},
	textCenter: {
		width: "80%",
		display: "flex",
		alignItems: "center",
	},
	welcomeText: {
		color: "white",
		textAlign: "center",
        fontWeight: "600 !important",
	},
	avatar: { 
        border: "3px solid #E20074", 
        width: '60px !important', 
        height: '60px !important' 
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
		textTransform: "none !important",
		justifyContent: "left !important",
		fontSize: "20px !important",
		marginBottom: "25px !important",
		backgroundColor: "#242424 !important",
		padding: "20px 15px !important",
		borderRadius: "15px !important",
	},
	bottomContainer: {
		width: "100%",
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
