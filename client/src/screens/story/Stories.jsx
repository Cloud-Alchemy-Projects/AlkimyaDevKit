import {React} from 'react'
import SearchBar from "../../components/searchBar/SearchBar"
import StoriesForms from './components/StoriesForm/StoriesForms'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AllStories from './components/AllStories'
import ToolsBar from "../../components/toolBar/ToolsBar"
import { useDispatch, useSelector } from "react-redux";
// import { getUserStoriesStatus } from "../../../../actions/userstories";

const Stories = () => {

    // const allBlacklog = useSelector((state) => state.users.fetchAllStatus);
    // const allOndeck = useSelector((state) => state.users.fetchAllStatus);
    // const allActive = useSelector((state) => state.users.fetchAllStatus);
    // const allComplete = useSelector((state) => state.users.fetchAllStatus);

    return (
        <>
            <ToolsBar/>
            <SearchBar color="black"/>
            <BrowserRouter basename="/story">
                <Switch>
                    <Route exact path='/' component = {AllStories}/>
                    <Route path="/new" component = {StoriesForms}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Stories