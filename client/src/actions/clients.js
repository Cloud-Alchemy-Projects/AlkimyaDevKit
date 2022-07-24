import { FETCH_ALL_CLIENTS, SEARCH_CLIENT, CREATE_CLIENT } from "../constants/clientsActions";
import * as api from '../api/index.js';

export const getClients = () => async (dispatch) =>{
    try {
        const { data } = await api.getClients();
        dispatch({ type: FETCH_ALL_CLIENTS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const searchClient = (clientName) => async (dispatch) =>{
    try {
        const { data } = await api.searchClient(clientName);
        dispatch({ type: SEARCH_CLIENT, payload: data});
    } catch (error) {
        console.log(error);
    }
}