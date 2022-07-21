import { combineReducers } from "redux";

import users from './users';
import projects from './projects';
import userstories from './userstories';
import auth from './auth';
import clients from './clients';

export default combineReducers({
    users,
    projects,
    userstories,
    clients,
    auth
});