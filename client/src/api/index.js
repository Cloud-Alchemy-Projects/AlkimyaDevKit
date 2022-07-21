import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:1010' });

API.interceptors.request.use((req) =>{
    if (localStorage.getItem('auth-token')) {
        req.headers['auth-token'] = localStorage.getItem('auth-token')
    }
    return req;
});

// Login
export const signIn = (userData) => API.post('login', userData);

// Projects
export const getProjects = () => API.get('projects/all');

// User Stories
export const getUserStories = () => API.get('userstories/all');
export const newUserStories = (userStoriesData) => API.post('userstories/new', userStoriesData);
export const allEpics = () => API.get('userstories/epics');
export const newEpic = (epicData) => API.post('userstories/epics/projects', epicData);
export const allRoles = () => API.get('userstories/roles');
export const newRole = (epicRol) => API.post('userstories/roles/projects/new', epicRol);
