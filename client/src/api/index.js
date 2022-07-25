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
export const getClients = () => API.get('clients/all')
export const searchClient = (clientName) => API.post('clients/info/name', clientName)
export const getCompanies = () => API.get('clients/companies')
export const newCompany = (companyData) => API.post('clients/companies/new',companyData)

// Projects
export const getProjects = () => API.get('projects/all');
export const getProjectStatus = () => API.get('projects/status');
export const createProject = (projectInfo) => API.post('projects/new', projectInfo);

// Users
export const getUsers = () => API.get('users/all')

// User Stories
export const getUserStories = () => API.get('userstories/all');
export const newUserStory = (userStoryData) => API.post('userstories/new', userStoryData);
export const allEpics = () => API.get('userstories/epics');
export const newEpic = (epicData) => API.post('userstories/epics/projects/new', epicData);
export const allRoles = () => API.get('userstories/roles');
export const newRole = (epicRol) => API.post('userstories/roles/projects/new', epicRol);
