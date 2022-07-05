import {FETCH_ALL_PROJECT, CREATE_PROJECT, UPDATE_PROJECT} from "../constants/projectsActions.js"
import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) =>{
    try {
        const { data } = await api.getProjects();
        dispatch({ type: FETCH_ALL_PROJECT, payload: data});
    } catch (error) {
        console.log(error);
    }
}