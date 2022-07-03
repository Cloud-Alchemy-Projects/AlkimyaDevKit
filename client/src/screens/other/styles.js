import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    paperContainer:{
        width: "60%",
        padding: "40px 20px",
        alignItems: "center"
    },
    gridContainer:{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridGap: '10px'
    },
    buttonContainer: {
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        gridTemplateColumns: "auto auto auto",
        gridGap: '10px'
    }
}));