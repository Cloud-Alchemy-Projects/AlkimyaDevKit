import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/material/Icon';
import {makeStyles} from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import fondo from '../home/images/fondo.jpg';
import logo from '../home/images/icono_1.png';


const useStyles = makeStyles(theme => ({
	root: { // <== Aqui es para el fondo de la pagina
		backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	menuIcon: { // <== Aqui se define el estilo del icono del menu
		transform: 'scale(1.4)',
		marginLeft: '1750px',
		marginTop: '45px'
	},
	logoIcon: { // <== Aqui se define el estilo del logo
		transform: 'scale(0.032)',
		marginLeft: '-1740px',
		marginTop: '-1745px'
	},
	container: { // <== Este contenedor es el principal, el que contiene todos los elementos (Titulo, Subtitulo, Email, Password, Inputs y Button)
		opacity: '1',
		width: '400px',
        height: '885px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        position: 'fixed',
        overflow: 'hidden',
		marginLeft: '1365px',
		backgroundColor: '#E20074',
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	container_1: { // <== Este contenedor sera en que este por detras del TextField
		opacity: '1',
		height: '45px',
		backgroundColor: 'white',
		borderRadius: '100px', // <== Permite que tengamos bordes curvos del cuadro de texto
		padding: '0px 10px', // <== Nos permite mover el indicador de escritura cuando se quiere ingresar los datos, para evitar que se salga de la caja
		marginTop: theme.spacing(4),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		},
		
	},
	tittleText: { // <== Aqui se da formato al texto Alkimya DevKit
		color: '#fff',
        fontWeight: '500',
        fontSize: '5.8em',
        lineHeight: '1.14',
        zIndex: '10',
        marginLeft: '150px',
        marginTop: '240px',
        textAlign: 'right',
        letterSpacing: '2.2px',
	},
	tittleText_02: { // <== Aqui se da formato al texto Alkimya DevKit
		color: '#fff',
        fontWeight: '500',
        fontSize: '5.8em',
        lineHeight: '1.14',
        zIndex: '10',
        marginLeft: '-335px',
        marginTop: '340px',
        textAlign: 'right',
        letterSpacing: '2.2px',
	},
	HeaderText: { // <== Aqui se da formato al texto Alkimya DevKit
		color: '#fff',
        fontWeight: '500',
        fontSize: '3.2em',
        lineHeight: '1.14',
        zIndex: '10',
        marginX: '0',
        marginTop: '240px',
        textAlign: 'center',
        letterSpacing: '2.2px',
	},
	SmallText: { // <== Aqui se da formato al texto by Cloud Alchemy
		color: '#fff',
        fontWeight: '400',
        fontSize: '19px',
        textAlign: 'right',
		padding: '10px',
        zIndex: '10',
        marginTop: '-10px'
	},
	smallText_01: { // <== Aqui se da formato al texto Email y Password
		color: '#fff',
  		fontWeight: '400',
  		fontSize: '20px',
  		zIndex: '10',
  		marginBottom: '-32px',
		paddingTop: '20px'
	},
	div: { // <== Aqui se define la division de la pagina
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
	},
	form: { // <== Aqui se define el area del formato (Email y Password)
		width: '100%',
		marginTop: theme.spacing(16)
	},
	button: { // <== Aqui se define el boton de LOG IN
		width: '40%',
		margin: theme.spacing(3, 0, 2),
		background: 'rgba(0, 0, 0, 1)',
		border: 'none',
        borderRadius: '100px',
		color: '#fff',
		fontSize: '15px',
        fontWeight: '600',
		marginLeft: '210px'
	}
}))

const App = () => {
	const [body, setBody] = useState({ email: '', password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	return (
		<Grid container component='main' className={classes.root}>
			
			{
			/* <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}>
    			<Toolbar>
					
					<IconButton color="inherit" aria-label="menu" className={classes.menuIcon}>
            			<MenuIcon />
          			</IconButton>
					
    			</Toolbar>
			</AppBar> */
			}

			<CssBaseline />

			<Box flexGrow={0} display="flex" flexDirection="row" >
          		<AppBar elevation={0} position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
            		<img src={logo} alt='logo' className={classes.logoIcon}/>
          		</AppBar>
        	</Box>

			<Typography component='h1' variant='h3' className={classes.tittleText}>Timeless </Typography>
			<Typography component='h1' variant='h3' className={classes.tittleText_02}>Innovation</Typography>

			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>

					<Typography component='h1' variant='h3' className={classes.HeaderText}>Alkimya DevKit</Typography>
					<Typography component='h1' variant='h2' className={classes.SmallText}>by Cloud Alchemy</Typography>

					<form className={classes.form}>

						<Typography className={classes.smallText_01}>Email</Typography>

						<TextField className={classes.container_1}
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='standard'
							name='email'
							value={body.email}
							onChange={handleChange}
							
							InputProps={{
								style: {fontSize: 25},
								disableUnderline: true, // <== agregar esto para quitar el marco cuando se selecciona el cuadro de texto
							}}
						/>

						<Typography className={classes.smallText_01}>Password</Typography>
						
						<TextField className={classes.container_1}
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='standard'
							name='password'
							value={body.password}
							onChange={handleChange}
							InputProps={{
								style: {fontSize: 25},
								disableUnderline: true, // <== agregar esto para quitar el marco cuando se selecciona el cuadro de texto
							}}
						/>


						<Button
							variant='contained'
							className={classes.button}
							onClick={() => onSubmit()}
						>
							LOG IN
						</Button>
					</form>
				</div>
			</Container>

			<Box flexGrow={0} display="flex" flexDirection="row" >
          		<AppBar elevation={0} position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
            		<IconButton color="inherit" aria-label="menu" className={classes.menuIcon}>
            			<MenuIcon />
          			</IconButton>
          		</AppBar>
        	</Box>

		</Grid>
	)
}

export default App
