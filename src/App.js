import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, PageBody } from './AppStyled';
import { HeaderPrincipal } from './Components/Header/index';
import {HomeScreen} from './Pages/HomeScreen/index';
import {NewTeam} from './Pages/NewTeam/index';
import ReactTooltip from 'react-tooltip';

export default () => {
    return (
        <BrowserRouter>
          <Container>
            <HeaderPrincipal/>
            <PageBody>
            <Switch>
            <Route path="/">
                  <NewTeam/>
              </Route>
            <Route exact path="/">
                  <HomeScreen />
              </Route>
            </Switch>
            <ReactTooltip id='tip-top' place='top' effect='solid'/>
            </PageBody>
          </Container>
        </BrowserRouter>
    );
}
