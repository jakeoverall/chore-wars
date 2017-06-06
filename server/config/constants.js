const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  household: {
    name: 'Household',
    endpoint: 'household'
  },
  chore: {
    name: 'Chore',
    endpoint: 'chore'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


export  {
  actions,
  models
}