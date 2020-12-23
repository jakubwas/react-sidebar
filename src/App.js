import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';

const App = () => {
  return (
    <styled.App>
      <Sidebar></Sidebar>
      <MainView></MainView>
    </styled.App>
  );
}

export default App;
