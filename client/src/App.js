import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
//import Projects from "./screens/project/Projects";
import Stories from "./screens/story/Stories";
//import SearchBar from "./components/searchBar/SearchBar";
//import ToolsBar from "./components/toolBar/ToolsBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<div>
                    {/* <ToolsBar/>
					<SearchBar/> */}
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/home" component={Home} />
						{/* <Route exact path="/projects" component={Projects}/> */}
						<Route exact path="/story" component={Stories}/>
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
