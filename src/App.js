import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';

const App = () => {

  const [isSidebarOpen, setSidebarState] = React.useState(true);

  return (
    <styled.App>
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setSidebarState={setSidebarState}
      />
      <MainView/>
    </styled.App>
  );
}

export default App;
