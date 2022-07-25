import { FETCH_ALL_CLIENTS, SEARCH_CLIENT, CREATE_CLIENT, FETCH_ALL_COMPANIES, CREATE_COMPANY} from "../constants/clientsActions";
import * as api from '../api/index.js';

export const getClients = () => async (dispatch) =>{
    try {
        const { data } = await api.getClients();
        dispatch({ type: FETCH_ALL_CLIENTS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const newClient = (clientInfo) => async (dispatch) =>{
    try {
        const { data } = await api.newClient(clientInfo);
        dispatch({ type: CREATE_CLIENT, payload: data});
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

export const getCompanies = () => async (dispatch) =>{
    try {
        const { data } = await api.getCompanies();
        dispatch({ type: FETCH_ALL_COMPANIES, payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const newCompany = (companyInfo) => async (dispatch) =>{
    try {
        const { data } = await api.newCompany(companyInfo);
        dispatch({ type: CREATE_COMPANY, payload: data});
    } catch (error) {
        console.log(error);
    }
}