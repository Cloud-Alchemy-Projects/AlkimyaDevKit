import {React, useEffect} from 'react'
import useStyles from "./styles"
import FormOther from './components/FormOther';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import { getProjects } from '../../actions/projects';

const Other = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const projects = useSelector(state => state.projects);
    
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProjects())
    }, [dispatch]);

    console.log(users);
    console.log(projects);

    return (
        <div className={classes.mainContainer}>
            <FormOther/>
        </div>
    )
}

export default Other