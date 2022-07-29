import {makeStyles} from "@mui/styles"

export default makeStyles(() => ({
    mainContainer: { //Contenedor general que contiene los demas componentes (SearchBar y ToolsBar)
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        paddingLeft: "400px"
    },
    circularContainer: { //Contenedor general para la vista stories
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    typoContainer:{ //Contenedor para el texto New User Story
        width: "auto",
		display: "flex",
        flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: "center",
        paddingTop: "20vh",
    },
    projectsTypo: {
        color: "#97004D",
		fontWeight: "700 !important",
    },
    paperTypo: {
        color: "#242424",
		fontWeight: "600 !important",
        marginRight: '49px !important'
    },
    formsContainer: { //Contenedor para los campos de texto
        width: "45vw",
        height: 'auto',
		paddingBottom: '25px'
    },
    formsTypo: {
        color: "#97004D",
		textTransform: "uppercase",
		marginTop: "20px !important",
        fontFamily: "var(--font-secondary-bold) !important"
    },
    selectProjectId: {
        fontFamily: 'var(--font-secondary-medium)',
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
            borderColor: '#e20074 !important',
            border: '2px solid'
        },
    },
    newRoleItem:{
        display:'flex', 
        justifyContent:'center',
        padding: '0 !important'
    },
    newRoleButton:{
        width: '100% !important',
        height: '100% !important',
        padding: '0 !important',
        fontFamily: 'var(--font-secondary-bold) !important',
    },
    selectProjectId_2: {
        fontFamily: 'var(--font-secondary-medium)',
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            border: "none !important",
            outline: "none !important",
        },
    },
    icon: {
        fill: "white !important"
    },
    root: {
        color: 'white !important',
    },
    textField: {
		width: "100%",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
            borderColor: '#e20074 !important',
            border: '2px solid'
        },
    },
    textField_Epic: {
		width: "100%",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            borderRadius: 10,
        },
    },
    storyContainer: {
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'black',
        borderRadius: '10px',
        marginTop:'20px',
        padding: '20px'
    },
    tittleStory:{
        color: "white",
        fontFamily: "var(--font-secondary-bold) !important"
    },
    textStory:{
        fontFamily: "var(--font-secondary-regular) !important",
        [`& fieldset`]: { // <== cambia el borde de los campos de texto
            border: 'none',
        },
    },
    lastField:{
        width: '100%',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    buttonContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'end'
    },
    createStoryButton: {
        background: "black !important",
        padding: '10px 40px !important',
        borderRadius: "10px !important",
        fontFamily: 'var(--font-secondary-bold) !important'
    },
    formsContainer_2: { //Contenedor para los campos de texto
        width: "100%",
        height: 'auto',
		paddingBottom: '25px',
        display: 'flex',
        marginTop: '50px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    },
    columnWrapper:{
        display: 'flex',
        gap: '10px'
        
    },
    columnInfo:{ //ESTE ES EL CONTENEDOR DE LOS CUADROS ROSADOS
        width: '250px',
        backgroundColor: '#E6E6E6 !important',
        borderRadius: '10px !important',
        height: "100%",
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    topContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    bottomContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    containerAllView:{ //Contenedor para el texto New User Story
        width: "80%",
		display: "flex",
        flexDirection: 'column',
		paddingTop: "20vh",
		marginBottom: "20px",
    },
    topContainerAllUS:{ //Contenedor para el texto New User Story
        width: "auto",
		display: "flex",
        flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: "center",
    },
    buttonTopContainer:{
        display: 'flex'
    },
    columnTypo:{
        fontFamily: "var(--font-secondary-medium) !important"
    },
    boxContainer:{
        width: "100%", 
        height: "150px",
        backgroundColor: 'rgba(226, 0, 116, 0.2)',
        padding: '10px',
    },
    textInBox:{
        whiteSpace: 'initial',
        overflow: 'hidden',
        color: 'black !important',
        fontFamily: "var(--font-secondary-medium) !important"
    },
}));
