import {FETCH_ALL_CLIENTS, CREATE_CLIENTS, UPDATE_CLIENTS} from "../constants/clientActions.js"
import * as api from '../api/index.js';

export const newClient = (clientInfo) => async (dispatch) =>{
    try {
        const { data } = await api.newClient(clientInfo);
        dispatch({ type: CREATE_CLIENTS, payload: data});
    } catch (error) {
        console.log(error);
    }
}