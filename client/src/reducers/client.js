import {FETCH_ALL_CLIENTS, CREATE_CLIENT, UPDATE_CLIENTS, FETCH_ALL_COMPANIES, CREATE_COMPANY} from "../constants/clientsActions.js"

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CLIENTS:
            return{ ...state, fetchAllClients: action.payload} 
        case CREATE_CLIENT:
            return{ ...state, createClient: [action.payload]}  
        case UPDATE_CLIENTS:
            return{ ...state, updateClient: [action.payload]} 
        case FETCH_ALL_COMPANIES:
            return{ ...state, fetchAllCompanies: action.payload} 
        case CREATE_COMPANY:
            return{ ...state, createCompany: [action.payload]} 
        default:
            return state;
    }
};