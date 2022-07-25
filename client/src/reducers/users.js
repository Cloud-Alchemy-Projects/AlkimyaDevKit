import {FETCH_ALL_USERS, CREATE_USER, UPDATE_USERS, LOG_USER} from "../constants/usersActions.js"

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:    
            return {...users, fetchAllusers: action.payload};
        case CREATE_USER:
            return [...users, action.payload];
        case LOG_USER:
            return {...users, logUser: action.payload};
        default:
            return users;
    }
};