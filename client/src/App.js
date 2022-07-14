import React from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Projects from "./screens/project/Projects";
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
                </Switch>
            </Router>
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
