import React from 'react';
import {MemoryRouter, Redirect, Route, Switch} from "react-router-dom";
import {Containers} from "./pages/containers/Containers";
import {Images} from "./pages/images/Images";
import Navigation from "./components/navigation/Navigation";
import styled from "styled-components";

const Content = styled.div`
  padding: 20px;
`

function App() {
  return (
    <MemoryRouter>
      <Navigation/>
      <Content>
        <Switch>
          <Route exact path="/">
            <Redirect to="/containers" />
          </Route>
          <Route exact path='/containers' component={Containers}/>
          <Route exact path='/images' component={Images}/>
        </Switch>
      </Content>
    </MemoryRouter>
  );
}

export default App;
