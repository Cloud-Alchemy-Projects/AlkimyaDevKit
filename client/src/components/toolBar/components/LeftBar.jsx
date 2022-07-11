import React from "react";
import { TextField, Button, InputAdornment, Typography, IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import useStyles from "../styles";
import logo from "../../../assets/images/logo_1.png";
import Avatar from '@mui/material/Avatar'

const LeftBar = ({user}) => {

	const classes = useStyles();

	return (
		<>
			<div className={classes.toolBar}>



				<div className={classes.mainContainer}>
                    <div className={classes.logoContainer}>
                        <img src={logo} alt='logo' className={classes.logoIcon}/>
                    </div>

					<div className={classes.topText}>
                        <div className={classes.textCenter}>
                            <Typography className={classes.welcomeText} variant="h4">Buen día, {user}</Typography>      
                        </div>

                        <Avatar className={classes.avatar}>OP</Avatar>             

					</div>
                    <div className={classes.buttonsContainer}>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<PersonIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Mi perfil</Button>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<NotificationsIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Notificaciones</Button>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<ChatBubbleIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '45px'}}/>}>Mensajes</Button>
                    </div>

				</div>

				<div className={classes.bottomContainer}>

					<IconButton>
                        <HelpIcon fontSize="large" sx={{ color: 'white' }}/>
                    </IconButton>
                    <IconButton sx={{marginLeft: '50px'}}>
                        <LogoutIcon fontSize="large" sx={{ color: 'white' }}/>
                    </IconButton>
				</div>
			</div>
		</>
	);
};

export default LeftBar;
