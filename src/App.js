import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';
// Data
import { mainMenuContent } from './Data/mainMenuContent'

const App = () => {

  const sidebarHeader = 'PSS';

  return (
    <styled.App>
      <Sidebar 
        header={sidebarHeader}
        menuItems={mainMenuContent}
      />
      <MainView/>
    </styled.App>
  );
}

export default App;
