import {React, useEffect} from 'react'
import useStyles from "./styles"
// import FormOther from './components/Home';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../../actions/users';
// import { getProjects } from '../../actions/projects';
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import { Typography } from '@mui/material';
const Home = () => {
    const classes = useStyles();

    // const dispatch = useDispatch();
    // const users = useSelector(state => state.users);
    // const projects = useSelector(state => state.projects);
    
    // useEffect(() => {
    //     dispatch(getUsers())
    //     dispatch(getProjects())
    // }, [dispatch]);

    // console.log(users);
    // console.log(projects);

    return (
        <div className={classes.mainContainer}>
            <ToolsBar/>
            <SearchBar color="white"/>
            <div className={classes.homeContainer}>
                <div className={classes.typoContainer}>
                    <Typography className={classes.homeTypo} variant="h2">Timeless Innovation</Typography>
                </div>
            </div>
        </div>
    )
}

export default Home