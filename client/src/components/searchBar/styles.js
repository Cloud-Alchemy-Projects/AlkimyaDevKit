import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	searchContainer: {
		position: "absolute",
		width: "100%",
		height: "25vh",
	},
	appBar: {
		height: "50%",
		width: "97%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "40px 0px 0px 360px",
		marginBottom: "30px",
	},
	rightContainer: {
		marginLeft: "40px",
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
        // fontSize: '16px !important'
	},
	textField: {
		background: "white",
        borderRadius: "10px",
	},
	bottomBarContainer: {
        position: "fixed",
		width: "100%",
		height: "20%",
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
		padding: "15px 70px 15px 40px !important",
		backgroundColor: "#000000 !important",
		borderRadius: "20px 0px 0px 20px !important",
		textTransform: "none !important",
        justifyContent: 'left !important',
        fontSize: '15px !important',
        fontFamily: 'var(--font-secondary-medium) !important'
	},
    tab: {
        backgroundColor: "#000000 !important",
        color: 'white !important',
        fontFamily: 'var(--font-secondary-medium) !important',
        borderRadius: "20px 0px 0px 20px !important",
        padding: "15px 70px 15px 40px !important",
        textTransform: "none !important",
        fontSize: '15px !important',
        [`& Mui-selected`]: { // <== cambia el borde de los campos de texto
            backgroundColor: "red !important",
        },
    }
}));
