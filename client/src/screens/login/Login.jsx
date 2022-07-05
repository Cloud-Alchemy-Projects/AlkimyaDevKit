import {React} from 'react';
//import useStyles from "./styles";
import './styles.css';
// Import components
import InputField from './components/inputField';
import LoginButton from './components/loginButton';

const Login = () => {
    // const classes = useStyles();
    return (
        <div className="backbroundLogin">
        <div className="logoImageContainer">logo</div>
        <div className="timelessTittle">
          <h1>Timeless Innovation</h1>
        </div>
        <div className="inputContainer">
          <div className="logoContainer">
            <div className="h1-container">
              <h1>Alkimya DevKit</h1> 
            </div>
            <div className="h2-container">
              <h2>by Cloud Alchemy</h2>
            </div>
          </div>
          <div className="inputForms">
            <div className="emailInput">
              <p>E-mail</p>
              { <InputField type="email" /> }
            </div>
            <div className="passwordInput">
              <p>Password</p>
              {<InputField type="password" /> }
            </div>
            <LoginButton />
          </div>
        </div>
        <div className="hamburguerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div> 
      </div>
    )
}

export default Login