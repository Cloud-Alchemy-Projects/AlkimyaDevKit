import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import Home from "./screens/home/Home";
//import Other from "./screens/other/Other";
import SearchBar from "./components/searchBar/SearchBar";
import ToolsBar from "./components/toolBar/ToolsBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<div>
                    <ToolsBar/>
					{/* <SearchBar/> */}
					{/* <Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/other" component={Other} />
					</Switch> */}
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
