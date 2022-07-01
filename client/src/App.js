import React from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./screens/home/Home";
import Other from "./screens/other/Other";
import { AccountBox } from "./screens/home/components/accountBox/index";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
	return (
<>
         <AppContainer> 
          <AccountBox /> 
        </AppContainer>
        
        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/other" component={Other} />
            </Switch>
          </div>
        </BrowserRouter> */}
        </>
    );
}

export default App;
