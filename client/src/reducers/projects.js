import {FETCH_ALL_PROJECT, CREATE_PROJECT, UPDATE_PROJECT} from "../constants/projectsActions.js"

export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECT:    
            return action.payload;   
        case CREATE_PROJECT:
            return [...projects, action.payload];
        default:
            return projects;
    }

};