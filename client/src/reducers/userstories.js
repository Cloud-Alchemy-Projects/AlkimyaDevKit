import {FETCH_ALL_US, CREATE_US, UPDATE_US} from "../constants/userstoriesActions.js"

export default (userstories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_US:    
            return action.payload;
        case CREATE_US:
            return [...userstories, action.payload];
        default:
            return userstories;
    }
};