import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Catalog from './Components/Catalog/Catalog';
import CatBio from './Components/CatBio/CatBio';
import AdminAdd from './Components/AdminAdd/AdminAdd';
import AdminEdit from './Components/AdminEdit/AdminEdit';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Catalog} exact path="/catalog" />
        <Route component={CatBio} expact path="/catbio" />
        <Route component={AdminAdd} expact path="/adminAdd" />
        <Route component={AdminEdit} expact path="/adminEdit/:id" />
        {/* <Route componet={} expact path="/" />
        <Route componet={} expact path="/" /> */}
    </Switch>
)