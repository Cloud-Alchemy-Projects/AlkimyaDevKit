import { combineReducers } from "redux";

import users from './users';
import projects from './projects';
import userstories from './userstories';

export default combineReducers({
    users,
    projects,
    userstories
});