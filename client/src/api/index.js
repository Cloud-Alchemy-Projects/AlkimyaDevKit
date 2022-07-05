import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:1010' });

// Login
export const getUsers = () => API.get('users');

// Projects
export const getProjects = () => API.get('projects');

// User Stories
export const getUserStories = () => API.get('userstories');
