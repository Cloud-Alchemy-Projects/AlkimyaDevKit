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

// Client
export const newClient = (clientData) => API.post('clients/new', clientData);


// Projects
export const getProjects = () => API.get('projects/all');

// User Stories
export const getUserStories = () => API.get('userstories/all');
