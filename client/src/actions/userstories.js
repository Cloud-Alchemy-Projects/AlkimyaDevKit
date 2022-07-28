import {FETCH_ALL_US, CREATE_US, UPDATE_US, FETCH_ALL_ROLES, FETCH_ALL_EPICS, CREATE_EPIC, CREATE_ROLE, FETCH_ALL_STATUS} from "../constants/userstoriesActions.js"
import * as api from '../api/index.js';

export const getUserStories = () => async (dispatch) =>{
    try {
        const { data } = await api.getUserStories();
        dispatch({ type: FETCH_ALL_US, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getUserStoriesStatus = () => async (dispatch) =>{ //GET USER STORIES STATUS USING REDUX
    try {
        const { data } = await api.getUserStoriesStatus();
        dispatch({ type: FETCH_ALL_STATUS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const newUserStory = (userStoryData) => async (dispatch) =>{
    try {
        const { data } = await api.newUserStory(userStoryData);
        dispatch({ type: CREATE_US, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getRoles = () => async (dispatch) =>{
    try {
        const { data } = await api.allRoles();
        dispatch({ type: FETCH_ALL_ROLES, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const newRole = (roleInfo) => async (dispatch) =>{
    try {
        const { data } = await api.newRole(roleInfo);
        dispatch({ type: CREATE_ROLE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getEpics = () => async (dispatch) =>{
    try {
        const { data } = await api.allEpics();
        dispatch({ type: FETCH_ALL_EPICS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const newEpic = (epicInfo) => async (dispatch) =>{
    try {
        const { data } = await api.newEpic(epicInfo);
        dispatch({ type: CREATE_EPIC, payload: data});
    } catch (error) {
        console.log(error);
    }
}