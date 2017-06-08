let Household = require('../models/household')

export default {
  household: {
    path: '/households',
    reqType: 'get',
    method(req, res, next){
      let action = 'Get Household Information'
      Household.find({creatorId: req.session.uid})
        .then(household => {
          res.send(handleResponse(action, household))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}

function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }