import { AUTH, LOGOUT } from "../constants/auth";

const authReducer = (state = [], action) => {
    switch (action.type) {
        case AUTH :
            localStorage.setItem("auth-token",  action.token );
            return action.token;
        default:
            return state;
    };
};

export default authReducer;