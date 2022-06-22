import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./screens/home/Home";

function App() {
	return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
