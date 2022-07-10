import React from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import useStyles from "../styles";
import logo from "../Images/icono_1.png";
import Avatar from '@mui/material/Avatar'

const LeftBar = ({color}) => {

	const classes = useStyles();

	return (
		<>
			<div className={classes.toolBar}>

				<img src={logo} alt='logo' className={classes.logoIcon}/>

				<div className={classes.mainContainer}>

					<div className={classes.topText}>
                        <Typography variant="body2" sx={{color: 'white', fontSize: '2em', textAlign: 'right'}}>Buen dia, Usuario</Typography>      
						<Avatar sx={{ width: 46, height: 46, marginLeft: '10px' }}>OP</Avatar>             
					</div>

					<Button variant="contained" size="large" sx={{textTransform: 'none', justifyContent:'left', fontSize: '20px', marginBottom: "25px", backgroundColor: "#242424"}} startIcon={<PersonIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Mi perfil</Button>
					<Button variant="contained" size="large" sx={{textTransform: 'none', justifyContent:'left', fontSize: '20px', marginBottom: "25px", backgroundColor: "#242424"}} startIcon={<NotificationsIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Notificaciones</Button>
					<Button variant="contained" size="large" sx={{textTransform: 'none', justifyContent:'left', fontSize: '20px', marginBottom: "25px", backgroundColor: "#242424"}} startIcon={<ChatBubbleIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Mensajes</Button>

				</div>

				<div className={classes.bottomContainer}>

					<Button
						sx={{ transform: 'scale(1.32)', color: 'white' }}
						variant="text"
						startIcon={<HelpIcon />}
					/>

					<Button
						sx={{ transform: 'scale(1.32)', color: 'white' }}
						variant="text"
						startIcon={<LogoutIcon />}
					/>
					

				</div>
			</div>
		</>
	);
};

export default LeftBar;
