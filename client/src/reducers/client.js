import {FETCH_ALL_CLIENTS, CREATE_CLIENTS, UPDATE_CLIENTS} from "../constants/clientActions.js"

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CLIENTS:
            return{ ...state, fetchAll: action.payload} 
        case CREATE_CLIENTS:
            return{ ...state, create: [action.payload]}  
        case UPDATE_CLIENTS:
            return{ ...state, create: [action.payload]} 
        default:
            return state;
    }
};