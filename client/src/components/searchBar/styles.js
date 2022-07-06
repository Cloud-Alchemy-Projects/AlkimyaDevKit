import {makeStyles} from '@mui/styles'

export default makeStyles(() => ({
    appBar: {
        width: "100%",
        height: "15vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky"
    },
    rightContainer:{
        marginLeft: '20px'
    },
    textToRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end'
    },
    textToRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end'
    },
    toPink: {
        color: '#FF57A2',
        fontWeight: '400'
    },
    leftContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: '30px'
    },
    h1bar: {
        fontWeight: '400'
    },
    h5Bar: {
        margin: '0px',
        fontWeight: 'normal'
    }
}));