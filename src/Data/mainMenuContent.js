export const mainMenuContent = [
    { name: 'Reporting panel', to: '/reportingpanel', icon: 'columns', subMenuItems: [] },
    { name: 'Analysis panel', to: '/analysis', icon: 'columns', subMenuItems: [] },
    { name: 'Company', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Plants', to: '/plants' },
        { name: 'Production lines', to: '/production-lines' },
        { name: 'Devices', to: '/devices' },
        { name: 'Devices Groups', to: '/devices-groups' },
        { name: 'Teams', to: '/teams' },
        { name: 'Shifts', to: '/shifts' },
        { name: 'Employees', to: '/employees' }
      ]
    },
    { name: 'Products', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Products list', to: '/products-list' },
        { name: 'Products groups', to: '/products-groups' }
      ]
    },
    { name: 'Production', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Recipes', to: '/recipes' },
        { name: 'Recipes groups', to: '/recipes-groups' },
        { name: 'Production', to: '/production' },
        { name: 'Production groups', to: '/production-groups' },
        { name: 'Production types', to: '/production-types' },
      ] 
    },
    { name: 'Accidents', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Accidents list', to: '/accidents-list' },
        { name: 'Accidents groups', to: '/accidents-groups' },
        { name: 'Accidents types', to: '/accidents-types' }
      ]
    },
    { name: 'Wastes', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Wastes list', to: '/wastes-list' },
        { name: 'Wastes groups', to: '/wastes-groups' },
        { name: 'Wastes types', to: '/wastes-types'},
        { name: 'Wastes production', to: '/wastes-production' }
      ]
    },
    { name: 'Measurements', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Measurements list', to: '/measurements-list' },
        { name: 'Measurements set', to: '/measurements-set' }
      ]
    },
    { name: 'Checkings', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Checkings list', to: '/checkings-list' },
        { name: 'Checkings sets', to: '/checkings-sets' }
      ]
    },
    { name: 'Reports', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Shift reports', to: '/shift-reports' },
        { name: 'Production', to: '/production' },
        { name: 'Expenditure', to: '/expenditure' },
        { name: 'Wastes', to: '/wastes' },
        { name: 'Accidents', to: '/accidents' },
        { name: 'Measurements', to: '/measurements' },
        { name: 'Checkings', to: '/checkings' },
        { name: 'Staff', to: '/staff' },
        { name: 'Weight control', to: '/weight-control' }
      ]
    },
    { name: 'Analysis', to: '', icon: 'columns', 
      subMenuItems: [
        { name: 'Analysis list', to: '/analysis-list' },
        { name: 'Analysis groups', to: '/analysis-groups' },
        { name: 'Analysis types', to: '/analysis-types' }
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
    }
  ];