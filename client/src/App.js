import React from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Projects from "./screens/project/Projects";
import Stories from "./screens/story/Stories";
//import SearchBar from "./components/searchBar/SearchBar";
//import ToolsBar from "./components/toolBar/ToolsBar";
import GuardRoute from "./helpers/GuardRoute";
import { createBrowserHistory } from "history";

function App() {
    const history = createBrowserHistory();
	return (
		<>
			{/* <BrowserRouter> */}
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <GuardRoute exact path="/home" component={Home} />
                    <GuardRoute exact path="/projects" component={Projects}/>
                    <GuardRoute exact path="/story" component={Stories}/>
                </Switch>
            </Router>
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
