import {makeStyles} from '@mui/styles'

export default makeStyles(() => ({
    toolBar: {
        width: "25%",
        height: "1080px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: 'column',
    },

    logoIcon: { // <== Aqui se define el estilo del logo
		transform: 'scale(0.1)',
		marginLeft: '-280px',
		marginTop: '-450px'
	},

    mainContainer:{
        width: '70%',
        marginLeft: '-5px',
        marginTop: '-550px',
        justifyContent: 'space-around',
        display: "flex",
        flexDirection: 'column',
    },

    topText: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '90px'
    },
    
    bottomContainer: {
        display: 'flex',
        margin: '150px',
        paddingBottom: '30px',
        flexDirection: 'row',
        paddingRight: '10px'
    },
}));