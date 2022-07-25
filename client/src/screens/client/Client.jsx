import {React} from 'react'
import ToolsBar from "../../components/toolBar/ToolsBar"
import SearchBar from "../../components/searchBar/SearchBar"
import ClientForm from "./components/ClientForm/ClientForm"
import ClientAll from "./components/ClientAll"
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Client = () => {
    return (
        <>
            <ToolsBar/>
            <SearchBar color="black"/>
            <BrowserRouter basename="/clients">
                <Switch>
                    <Route exact path='/' component={ClientAll}/>
                    <Route path='/new' component = {ClientForm}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Client