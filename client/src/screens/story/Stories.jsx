import {React} from 'react'
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import StoriesForm from './components/StoriesForms'

const Stories = () => {

    return (

        <>
            <ToolsBar user="User"/>
            <SearchBar color="black"/>
            <StoriesForm/>
        </>
    )
}

export default Stories