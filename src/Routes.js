import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReportingPanel } from './Components/MainView/ReportingPanel/ReportingPanel';
import { AnalysisPanel } from './Components/MainView/AnalysisPanel/AnalysisPanel';
import { Devices } from './Components/MainView/Company/Devices';
import { DevicesGroups } from './Components/MainView/Company/DevicesGroups';
import { Employees } from './Components/MainView/Company/Employees';
import { Plants } from './Components/MainView/Company/Plants';
import { ProductionLines } from './Components/MainView/Company/ProductionLines';
import { Shifts } from './Components/MainView/Company/Shifts';
import { Teams } from './Components/MainView/Company/Teams';
import { ProductsList } from './Components/MainView/Products/ProductsList';
import { ProductsGroups } from './Components/MainView/Products/ProductsGroups';
import { Production } from './Components/MainView/Production/Production';
import { ProductionGroup } from './Components/MainView/Production/ProductionGroup';
import { ProductionType } from './Components/MainView/Production/ProductionType';
import { Recipes } from './Components/MainView/Production/Recipes';
import { Accidents } from './Components/MainView/Accidents/AccidentsList';
import { AccidentsGroups } from './Components/MainView/Accidents/AccidentsGroups';
import { AccidentsTypes } from './Components/MainView/Accidents/AccidentsTypes';
import { WastesList } from './Components/MainView/Wastes/WastesList';
import { WastesGroups } from './Components/MainView/Wastes/WastesGroups';
import { WastesTypes } from './Components/MainView/Wastes/WastesTypes';
import { WastesExecution } from './Components/MainView/Wastes/WastesExecution';
import { MeasurementsList } from './Components/MainView/Measurements/MeasurementsList';
import { MeasurementsSet } from './Components/MainView/Measurements/MeasurementsSet';
import { CheckingsList } from './Components/MainView/Checkings/CheckingsList';
import { CheckingsSet } from './Components/MainView/Checkings/CheckingsSet';


const Routes = () => {
    return(
    <Switch>
        {/* Reporting Panel */}
        <Route exact path='/' component={ReportingPanel}/>
        {/* Analysis Panel */}
        <Route path='/analysis-panel' component={AnalysisPanel}/>
        {/* Company */}
        <Route path='/devices' component={Devices}/>
        <Route path='/devices-groups' component={DevicesGroups}/>
        <Route path='/employeesl' component={Employees}/>
        <Route path='/plants' component={Plants}/>
        <Route path='/lines' component={ProductionLines}/>
        <Route path='/shifts' component={Shifts}/>
        <Route path='/teams' component={Teams}/>
        {/* Products */}
        <Route path='/products' component={ProductsList}/>
        <Route path='/products-groups' component={ProductsGroups}/>
        {/* Production */}
        <Route path='/productexecution' component={Production}/>
        <Route path='/productexecutiongroup' component={ProductionGroup}/>
        <Route path='/productexecutiontype' component={ProductionType}/>
        <Route path='/recipes' component={Recipes}/>
        <Route path='/recipes-groups' component={RecipesGroups}/>
        {/* Accidents */}
        <Route path='/accidents' component={Accidents}/>
        <Route path='/accidents-groups' component={AccidentsGroups}/>
        <Route path='/accidents-types' component={AccidentsTypes}/>
        {/* Wastes */}
        <Route path='/wastes' component={WastesList}/>
        <Route path='/wastes-groups' component={WastesGroups}/>
        <Route path='/wastes-types' component={WastesTypes}/>
        <Route path='/wastes-execution' component={WastesExecution}/>
        {/* Measurements */}
        <Route path='/measurements' component={MeasurementsList}/>
        <Route path='/measurementsets' component={MeasurementsSet}/>
        {/* Checkings */}
        <Route path='/checkings' component={CheckingsList}/>
        <Route path='/checkings-sets' component={CheckingsSet}/>
        {/* Reports */}
        
    </Switch>)
}

export default Routes;