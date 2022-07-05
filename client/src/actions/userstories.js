import {FETCH_ALL_US, CREATE_US, UPDATE_US} from "../constants/userstoriesActions.js"
import * as api from '../api/index.js';

export const getUserStories = () => async (dispatch) =>{
    try {
        const { data } = await api.getUserStories();
        dispatch({ type: FETCH_ALL_US, payload: data});
    } catch (error) {
        console.log(error);
    }
}