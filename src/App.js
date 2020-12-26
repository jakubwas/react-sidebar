import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';

const App = () => {

  const sidebarHeader = 'PSS';

  const menuItems = [
    { name: 'Home', to: '/', icon: 'home', subMenuItems: [] },
    { name: 'Reporting Panel', to: '/reportingpanel', icon: 'columns', subMenuItems: [] },
    { name: 'Company', to: '/company', icon: 'building', 
      subMenuItems: [
        { name: 'Plants', to: '/plants' },
        { name: 'Devices', to: '/devices' },
        { name: 'Devices Groups', to: '/devicesgroups'}
      ] },
    { name: 'Accidents', to: '/accidents', icon: 'times', subMenuItems: [] },
    { name: 'Production', to: '/production', icon: 'building', subMenuItems: [] },
    { name: 'Setting', to: '/settings', icon: 'cog', 
    subMenuItems: [
      { name: 'Users', to: '/plants' },
      { name: 'Languages', to: '/devices' },
      { name: 'Translation', to: '/devicesgroups'}
    ]}
  ];

  return (
    <styled.App>
      <Sidebar 
        header={sidebarHeader}
        menuItems={menuItems}
      />
      <MainView/>
    </styled.App>
  );
}

export default App;
