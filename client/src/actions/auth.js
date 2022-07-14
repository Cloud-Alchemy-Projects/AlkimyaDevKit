import {AUTH, LOGOUT} from "../constants/auth"
import * as api from '../api/index.js';

export const signin = (userData, router) => async (dispatch) => {
    try {
        //console.log(formData);
        const { data } = await api.signIn(userData);
        const token = data.data.token;
        //console.log(data.data.token);
        dispatch({ type: AUTH, token });

        router.push("/home");
    } catch (error) {
        console.log(error);
    }
};