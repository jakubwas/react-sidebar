import React from 'react';
import * as styled from './App.styles';
// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainView from './Components/MainView/MainView';

const App = () => {

  const sidebarHeader = 'PSS';

  const menuItems = [
    { name: 'Reporting Panel', to: '/reportingpanel', icon: 'columns', subMenuItems: [] },
    { name: 'Analysis', to: '/analysis', icon: 'columns', subMenuItems: [] },
    { name: 'Company', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Devices Groups', to: '/devicesgroups' },
        { name: 'Devices', to: '/devices' },
        { name: 'Plants', to: '/plants' },
        { name: 'Shifts', to: '/shifts' },
        { name: 'Teams', to: '/teams' },
        { name: 'Lines', to: '/lines' },
        { name: 'Employees', to: '/employees' }
      ]
    },
    { name: 'Production', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Recipes', to: '/recipes' },
        { name: 'Recipes Groups', to: '/recipesgroups' },
        { name: 'Production', to: '/production' },
        { name: 'Production Groups', to: '/productiongroups' },
        { name: 'Production Types', to: '/productiontypes' },
      ] 
    },
    { name: 'Wastes', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Wastes List', to: '/wasteslist' },
        { name: 'Wastes Groups', to: '/wastesgroups' },
        { name: 'Wastes Types', to: '/wastestypes'},
        { name: 'Wastes Execution', to: '/wastesexecution' }
      ]
    },
    { name: 'Measurements', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Measurements List', to: '/measurementslist' },
        { name: 'Measurements Set', to: '/measurementsset' }
      ]
    },
    { name: 'Checkings', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Checkings List', to: '/checkingslist' },
        { name: 'Checkings Set', to: '/checkingsset' }
      ]
    },
    { name: 'Accidents', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Accidents List', to: '/accidentslist' },
        { name: 'Accidents Groups', to: '/accidentsgroups' },
        { name: 'Accidents Types', to: '/accidentstypes' }
      ]
    },
    { name: 'Products', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Products List', to: '/productslist' },
        { name: 'Products Groups', to: '/productsgroups' }
      ]
    },
    { name: 'Settings', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Hosts', to: '/hosts' },
        { name: 'Languages', to: '/languages' },
        { name: 'Messages', to: '/messages' },
        { name: 'Permissions', to: '/permissions' },
        { name: 'Roles', to: '/roles' },
        { name: 'Translations', to: '/translations' },
        { name: 'Units', to: '/units' },
        { name: 'Users', to: '/users' }
      ]
    },
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
