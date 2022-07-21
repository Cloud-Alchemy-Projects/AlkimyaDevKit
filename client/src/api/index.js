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
export const getProjects = () => API.get('projects');
export const getProjectStatus = () => API.get('projects/status');
export const createProject = (projectInfo) => API.post('projects/new', projectInfo);

// User Stories
export const getUserStories = () => API.get('userstories');

// Clients
export const getClients = () => API.get('clients/all')
export const searchClient = (clientName) => API.post('clients/info/name', clientName)

// Users
export const getUsers = () => API.get('users/all')