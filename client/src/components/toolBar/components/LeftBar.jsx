import React from "react";
import { TextField, Button, InputAdornment, Typography, IconButton } from "@mui/material";
import {useHistory} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import useStyles from "../styles";
import logo from "../../../assets/Images/logo_1.png";
import Avatar from '@mui/material/Avatar'

const LeftBar = ({user}) => {

	const classes = useStyles();
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('auth-token'); 
        history.push("/")
    }

	return (
		<>
			<div className={classes.toolBar}>

				<div className={classes.mainContainer}>

                    <div className={classes.logoContainer}>
                        <img src={logo} alt='logo' className={classes.logoIcon}/>
                    </div>
                
					<div className={classes.topText}>
                        <Typography className={classes.welcomeText} variant="h6">Good day, {user}</Typography>      
                        <Avatar className={classes.avatar}>OP</Avatar>             
					</div>
                    
                    <div className={classes.buttonsContainer}>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<PersonIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '30px'}}/>}>My Account</Button>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<NotificationsIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '30px'}}/>}>Notifications</Button>
                        <Button className={classes.buttonMiddle} variant="contained" size="large" startIcon={<ChatBubbleIcon sx={{transform: 'scale(1.32)', marginLeft: '10px', marginRight: '30px'}}/>}>Chat</Button>
                    </div>

                </div>
                <div className={classes.bottomContainer}>
                    <IconButton size="large">
                        <HelpIcon fontSize="inherit" sx={{ color: 'white' }}/>
                    </IconButton>
                    <IconButton size="large" sx={{marginLeft: '50px'}} onClick={logout}>
                        <LogoutIcon fontSize="inherit" sx={{ color: 'white' }}/>
                    </IconButton>
                </div> 
			</div>
		</>
	);
};

export default LeftBar;
