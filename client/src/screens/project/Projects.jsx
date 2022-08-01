import {React} from 'react'
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import ProjectsForm from './components/ProjectsForms/ProjectsForms';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AllProjects from './components/AllProjects/AllProjects';

const Projects = () => {
    return (
        <>
            <ToolsBar/>
            <SearchBar color="black" project={true}/>
            <BrowserRouter basename="/projects">
                <Switch>
                    <Route exact path='/' component={AllProjects}/>
                    <Route path='/new' component = {ProjectsForm}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Projects