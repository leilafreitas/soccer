import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, PageBody } from './AppStyled';
import { HeaderPrincipal } from './Components/Header/index';
import {HomeScreen} from './Pages/HomeScreen/index';
import {NewTeam} from './Pages/NewTeam/index';

export default () => {
    return (
        <BrowserRouter>
          <Container>
            <HeaderPrincipal/>
            <PageBody>
            <Switch>
              <Route exact path="/">
                  <HomeScreen />
              </Route>
              
              <Route path="/">
                  <NewTeam/>
              </Route>
            </Switch>
            </PageBody>
          </Container>
        </BrowserRouter>
    );
}
