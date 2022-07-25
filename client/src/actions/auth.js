import {AUTH, LOGOUT} from "../constants/auth"
import {LOG_USER} from "../constants/usersActions.js"
import * as api from '../api/index.js';

export const signin = (userData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);
        const token = data.token;
        const logUser = data.logUser;
        dispatch({ type: AUTH, token });
        dispatch({ type: LOG_USER, payload: logUser });

        router.push("/home");
    } catch (error) {
        console.log(error);
    }
};