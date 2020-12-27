import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/MainView/Home/Home';
import Accidents from './Components/MainView/Accidents/Accidents';
import Company from './Components/MainView/Company/Company';
import Production from './Components/MainView/Production/Production';
import ReportingPanel from './Components/MainView/ReportingPanel/ReportingPanel';
import Settings from './Components/MainView/Settings/Settings';

const Routes = () => {
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/accidents' component={Accidents}/>
        <Route path='/company' component={Company}/>
        <Route path='/production' component={Production}/>
        <Route path='/reportingpanel' component={ReportingPanel}/>
        <Route path='/settings' component={Settings}/>
    </Switch>)
}

export default Routes;