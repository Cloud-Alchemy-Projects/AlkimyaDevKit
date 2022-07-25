import {FETCH_ALL_USERS, CREATE_USERS, UPDATE_USERS, LOG_USER} from "../constants/usersActions.js"
import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) =>{
    try {
        const { data } = await api.getUsers();
        dispatch({ type: FETCH_ALL_USERS, payload: data});
    } catch (error) {
        console.log(error);
    }
}