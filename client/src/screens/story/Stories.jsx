import {React} from 'react'
import SearchBar from "../../components/searchBar/SearchBar"
import StoriesForm from './components/StoriesForms'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AllStories from './components/AllStories'
import ToolsBar from "../../components/toolBar/ToolsBar"

const Stories = () => {

    return (
        <>
            <ToolsBar user="User"/>
            <SearchBar color="black"/>
            <BrowserRouter basename="/story">
                <Switch>
                    <Route exact path='/' component = {AllStories}/>
                    <Route path="/new" component = {StoriesForm}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Stories