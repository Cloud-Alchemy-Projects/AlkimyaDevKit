import {React} from 'react'
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import ProjectsForm from './components/ProjectsForms/ProjectsForms';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "../home/Home"
import AllProjects from './components/AllProjects';
const Projects = () => {
    return (
        <>
            <ToolsBar user="User"/>
            <SearchBar color="black"/>
            <BrowserRouter basename="/projects">
                <Switch>
                    {/* <Route exact path="/all" component = {}/> */}
                    <Route exact path='/' component={AllProjects}/>
                    <Route path='/new' component = {ProjectsForm}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Projects