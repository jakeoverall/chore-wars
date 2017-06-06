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
    endpoint: 'household',
    useCustomRoutes: true
  },
  chore: {
    name: 'Chore',
    endpoint: 'chore'
  },
  leaderboard: {
    name: 'Leaderboard',
    endpoint: 'leaderboard'
  },
  prize: {
    name: 'Prize',
    endpoint: 'prize'
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