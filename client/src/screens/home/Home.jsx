import logo from '../home/images/icono_1.png';
import useStyles from "./styles";
import React from 'react';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

const Home = () => {

    const [body, setBody] = useState({ email: '', password: '' });
    
	const classes = useStyles();


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

    return(
        
        <Grid container component='main' className={classes.mainContainer}>
            
            <CssBaseline />

            <Box flexGrow={0} display='flex' flexDirection='row'>
                
                <AppBar elevation={0} position='fixed' style={{background: 'transparent', boxShadow: 'none'}}>
                    <img src={logo} alt='logo' className={classes.logoIcon}/>

                    <IconButton color="inherit" aria-label="menu" className={classes.menuIcon}>
            			<MenuIcon />
          			</IconButton>

                </AppBar>
                

            </Box>


            {/* AQUI SE DEFINEN LOS TITULOS DE TIMELESS INNOVATION */}
            <Typography style={{color: '#fff', fontWeight: '600', fontSize: '5.8em', lineHeight: '1.14',
            zIndex: '10', marginLeft: '220px', marginTop: '240px', textAlign: 'left', letterSpacing: '2.2px'}}>

                Timeless 

            </Typography>


			<Typography style={{color: '#fff', fontWeight: '600', fontSize: '5.8em', lineHeight: '1.14',
            zIndex: '10', marginLeft: '-420px', marginTop: '340px', textAlign: 'left', letterSpacing: '2.2px'}}>

                Innovation

            </Typography>



            {/* INICIA LA CREACION DEL CUADRO QUE CONTENDRA TODOS LOS ELEMENTOS PRINCIPALES */}
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} style={{opacity: '1',
		    width: '400px', height: '885px', display: 'flex', flexDirection: 'column', borderRadius: '20px',
            position: 'fixed', overflow: 'hidden', marginLeft: '1365px', backgroundColor: '#E20074',}}>

                <div className={classes.div}> {/* INICIA LA DIVISION QUE CONTIENE TODO (NOMBRE DE EMPRESA, FORMATO A LLENAR Y BOTON) */}

                    <Typography style={{color: '#fff', fontWeight: '600', fontSize: '2.7em',lineHeight: '1.14', zIndex: '10',
                    marginX: '0', marginTop: '300px', textAlign: 'center', letterSpacing: '0.5px'}}>

                        Alkimya DevKit 

                    </Typography>

				    <Typography style={{color: '#fff', fontWeight: '400', fontSize: '19px',textAlign: 'right', padding: '10px',
                    zIndex: '10', marginTop: '-10px'}}>

                        by Cloud Alchemy

                    </Typography>
                    
                    
                    <form className={classes.form}> {/* INICIA LA SECCION DEL FORMATO A LLENAR (EMAIL Y CONTRASENA) Y BOTON LOG IN */}

                        <Typography style={{color: '#fff', fontWeight: '400', fontSize: '20px', zIndex: '10', marginBottom: '-32px',
		                paddingTop: '20px'}}>

                            Email

                        </Typography>


                        <TextField  className={classes.container_1} style={{padding: '0px 20px', marginTop: '40px',}} 
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

                        <Typography style={{color: '#fff', fontWeight: '400', fontSize: '20px', zIndex: '10', marginBottom: '-32px',
		                paddingTop: '10px'}}>

                            Password

                        </Typography>
						
					    <TextField className={classes.container_1} style={{padding: '0px 20px', marginTop: '40px',}}
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

                        <Button //<== INICIO LA SECCION PARA EL BOTON
                            variant='contained'
                            className={classes.button}
                            style={{background: 'rgba(0, 0, 0, 1)', border: 'none', borderRadius: '100px', color: '#fff', fontSize: '15px',
                            fontWeight: '600', marginTop: '20px', marginLeft: '210px'}}
                            onClick={() => onSubmit()}>

                                LOG IN

                        </Button>


                    </form> {/* FIN DE LA SECCION DEL FORMATO A LLENAR (EMAIL Y CONTRASENA) Y BOTON LOG IN */}

                </div> {/* FIN DE LA DIVISION QUE CONTIENE TODO (NOMBRE DE EMPRESA, FORMATO A LLENAR Y BOTON) */}

            </Container> {/* FIN DE LA CREACION DEL CUADRO QUE CONTENDRA TODOS LOS ELEMENTOS PRINCIPALES */}

            <Box flexGrow={0} display="flex" flexDirection="row" >

          		<AppBar elevation={0} position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
            		<IconButton color="inherit" aria-label="menu" className={classes.menuIcon}>
            			<MenuIcon />
          			</IconButton>
          		</AppBar>
                
        	</Box>
            

        </Grid>
    )
};

export default Home;