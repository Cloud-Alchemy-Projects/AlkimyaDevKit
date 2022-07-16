import {React} from 'react'
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import ProjectsForm from "./components/ProjectsForms"

const Projects = () => {
    return (
        <>
            <ToolsBar user="User"/>
            <SearchBar color="black"/>
            <ProjectsForm/>
        </>
    )
}

export default Projects