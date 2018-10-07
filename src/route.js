import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Catalog from './Components/Catalog/Catalog';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Catalog} exact path="/catalog" />
    </Switch>
)