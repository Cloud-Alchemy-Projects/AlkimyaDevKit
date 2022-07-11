import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	searchContainer: {
		position: "absolute",
		width: "100%",
		height: "25vh",
	},
	appBar: {
		height: "30%",
		width: "97%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "40px 0px 0px 410px",
		marginBottom: "30px",
	},
	rightContainer: {
		marginLeft: "20px",
	},
	textToRight: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "end",
	},
	textToRight: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "end",
	},
	toPink: {
		color: "#FF57A2",
		fontWeight: "400",
	},
	leftContainer: {
		width: "50%",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		marginRight: "30px",
	},
	buttonTop: {
		marginRight: "20px !important",
		textTransform: "none !important",
        borderRadius: '15px !important',
        fontSize: '16px !important'
	},
	textField: {
		background: "white",
		borderRadius: "5px",
	},
	bottomBarContainer: {
		width: "100%",
		height: "60%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	buttonsWrapper: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	buttonBar: {
		padding: "17px 90px 17px 40px !important",
		backgroundColor: "#000000 !important",
		borderRadius: "20px 0px 0px 20px !important",
		textTransform: "none !important",
        justifyContent: 'left !important',
        fontSize: '16px !important'
	},
}));
