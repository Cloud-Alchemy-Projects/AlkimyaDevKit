import React from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from "react-router-dom";
import GuardRoute from "./helpers/GuardRoute";
import { createBrowserHistory } from "history";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Projects from "./screens/project/Projects";
import Stories from "./screens/story/Stories";

function App() {
    const history = createBrowserHistory();
	return (
		<>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <GuardRoute exact path="/home*" component={Home} />
                    <GuardRoute exact path="/projects*" component={Projects}/>
                    <GuardRoute exact path="/story*" component={Stories}/>
                    <Redirect to="/home" />
                </Switch>
            </Router>
		</>
	);
}

export default App;
