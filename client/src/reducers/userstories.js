import {FETCH_ALL_US, CREATE_US, UPDATE_US, FETCH_ALL_ROLES, FETCH_ALL_EPICS} from "../constants/userstoriesActions.js"

export default (userstories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_US:
            return{ ...userstories, fetchAll: action.payload} 
        case CREATE_US:
            return{ ...userstories, create: [action.payload]}  
        case FETCH_ALL_ROLES:
            return{ ...userstories, fetchAllRoles: action.payload}  
        case FETCH_ALL_EPICS:
            return{ ...userstories, fetchAllEpics: action.payload}  
        default:
            return userstories;
    }
};