import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';

const App = () => {

  const sidebarHeader = 'PSS';
  const menuItems = ['Reporting Panel', 'Company', 'Accidents', 'Production', 'Setting']

  return (
    <styled.App>
      <Sidebar 
        header={sidebarHeader}
      />
      <MainView/>
    </styled.App>
  );
}

export default App;
