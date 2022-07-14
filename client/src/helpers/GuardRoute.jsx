import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const GuardRoute = ({ component: Component, ...rest }) => {
    
    function existJWT() {
        let flag = false;
        localStorage.getItem("auth-token") ? flag=true : flag=false
        return flag
    }
    
    return (
        <Route {...rest}
            render={props => (
                existJWT() ? 
                <Component {...props} /> : <Redirect to={{pathname: '/'}}/>
            )}
        />
    )
}

export default GuardRoute