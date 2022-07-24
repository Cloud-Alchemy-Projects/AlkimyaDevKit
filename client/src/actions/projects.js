import {FETCH_ALL_PROJECT, CREATE_PROJECT, UPDATE_PROJECT, PROJECT_STATUS} from "../constants/projectsActions.js"
import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) =>{
    try {
        const { data } = await api.getProjects();
        dispatch({ type: FETCH_ALL_PROJECT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getProjectStatus = () => async (dispatch) =>{
    try {
        const { data } = await api.getProjectStatus();
        dispatch({ type: PROJECT_STATUS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createProject = (projectInfo) => async (dispatch) => {
    try {

        const { data } = await api.createProject(projectInfo);
        dispatch({ type: CREATE_PROJECT, payload: data });
    } catch (error) {
        console.log(error);
    }
};