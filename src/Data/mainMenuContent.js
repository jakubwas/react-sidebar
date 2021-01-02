export const mainMenuContent = [
  {
    label: 'reporting.panel',
    url: '/',
    icon: 'developer_board',
  },
  {
    label: 'analysis.panel',
    url: '/analysis-panel',
    icon: 'insert_chart_outlined',
  },
  {
    label: 'company',
    icon: 'business',
    items: [
      {
        label: 'plants',
        url: '/plants',
      },
      {
        label: 'production.lines',
        url: '/lines',
      },
      {
        label: 'devices',
        url: '/devices',
      },
      {
        label: 'devices.groups',
        url: '/devices-groups',
      },
      {
        label: 'teams',
        url: '/teams',
      },
      {
        label: 'shifts',
        url: '/shifts',
      },
      {
        label: 'employees',
        url: '/employees',
      }
    ]
  },
  {
    label: 'products',
    icon: 'layers',
    items: [
      {
        label: 'products.list',
        url: '/products',
      },
      {
        label: 'products.groups',
        url: '/products-groups',
      },
    ]
  },
  {
    label: 'production',
    icon: 'build',
    items: [
      {
        label: 'recipes',
        url: '/recipes',
      },
      {
        label: 'recipes.groups',
        url: '/recipes-groups',
      },
      {
        label: 'production',
        url: '/productexecution',
      },
      {
        label: 'production.group',
        url: '/productexecutiongroup',
      },
      {
        label: 'production.type',
        url: '/productexecutiontype',
      }
    ]
  },
  {
    label: 'accidents',
    icon: 'warning',
    items: [
      {
        label: 'accidents.list',
        url: '/accidents',
      },
      {
        label: 'accidents.groups',
        url: '/accidents-groups',
      },
      {
        label: 'accidents.types',
        url: '/accidents-types',
      }
    ]
  },
  {
    label: 'wastes',
    icon: 'delete',
    items: [
      {
        label: 'wastes.list',
        url: '/wastes',
      },
      {
        label: 'wastes.groups',
        url: '/wastes-groups',
      },
      {
        label: 'wastes.types',
        url: '/wastes-types',
      },
      {
        label: 'wastes.executions',
        url: '/wastes-execution',
      }
    ]
  },
  {
    label: 'measurements',
    icon: 'network_check',
    items: [
      {
        label: 'measurements.list',
        url: '/measurements',
      },
      {
        label: 'measurements.set',
        url: '/measurementsets',
      }
    ]
  },
  {
    label: 'checkings',
    icon: 'playlist_add_check',
    items: [
      {
        label: 'checkings.list',
        url: '/checkings',
      },
      {
        label: 'checkings.sets',
        url: '/checkings-sets',
      }
    ]
  },
  {
    label: 'reports',
    icon: 'assignment',
    items: [
      {
        label: 'shift.reports',
        url: '/reports',
      },
      {
        label: 'production',
        url: '/reportedproducts',
      },
      {
        label: 'expenditure',
        url: '/reportedexpenditures',
      },
      {
        label: 'wastes',
        url: '/reportedwastes',
      },
      {
        label: 'accidents',
        url: '/reportedaccidents',
      },
      {
        label: 'measurements',
        url: '/reportedmeasurements',
      },
      {
        label: 'checkings',
        url: '/reportedcheckings',
      },
      {
        label: 'staff',
        url: '/reportedstaffs',
      },
      {
        label: 'weight.control',
        url: '/reportedweights',
      }
    ]
  },
  {
    label: 'analysis',
    icon: 'equalizer',
    items: [
      {
        label: 'analysis.list',
        url: '/analysis-reports-definitions',
      },
      {
        label: 'analysis.groups',
        url: '/analysis-reports-groups',
      },
      {
        label: 'analysis.types',
        url: '/analysis-reports-types',
      },
    ]
  },
  {
    label: 'settings',
    icon: 'settings',
    items: [
      {
        label: 'users',
        url: '/users',
      },
      {
        label: 'roles',
        url: '/roles',
      },
      {
        label: 'permissions',
        url: '/permissions',
      },
      {
        label: 'languages',
        url: '/languages',
      },
      {
        label: 'translations',
        url: '/translations',
      },
      {
        label: 'messages',
        url: '/messages',
      },
      {
        label: 'units',
        url: '/units',
      },
      {
        label: 'hosts',
        url: '/hosts',
      }
    ]
  }
];

