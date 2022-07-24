import { FETCH_ALL_CLIENTS, SEARCH_CLIENT, CREATE_CLIENT } from "../constants/clientsActions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CLIENTS:    
            return action.payload;
        case CREATE_CLIENT:
            return [...state, action.payload];
        default:
            return state;
    }
};