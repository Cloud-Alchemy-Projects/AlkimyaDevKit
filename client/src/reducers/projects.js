import {FETCH_ALL_PROJECT, CREATE_PROJECT, UPDATE_PROJECT, PROJECT_STATUS} from "../constants/projectsActions.js"

export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECT:    
            return { ...projects, fetchAllProjects: action.payload} 
        case PROJECT_STATUS:    
            return action.payload;
        case CREATE_PROJECT:
            return { ...projects, createProject: [action.payload]} 
        default:
            return projects;
    }

};