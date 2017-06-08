import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

let state = {
  user: {},
  error: {},
  household: {}

}

let handleError = (state, err) =>{
  state.err = err
}

export default new Vuex.Store({
  state,
  mutations: {
    setUser(state, user) {
      state.user = user
      router.push('/household')
    },
    setError(state) {
      state.error = {}
    },
    setAuth(state, user) {
      state.user = user || {}
      // router.push('household')
    },
    setHousehold(state, household) {
      state.household = household
    },
  },
  actions: {
    login({commit, dispatch}, user) {
      auth.post('login', user)
      .then( res => {
        commit('setUser', res.data.data)

        if (state.user === null) {
            router.push('/')
          }
      }) .catch(err => {
          router.push('/login')
        })
    },
    getAuth({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setAuth', res.data.data)

        }).catch((err => {
        }))

    },
     clearError({ commit, dispatch }) {
      commit('setError')
    },
    getHousehold({ commit, dispatch }, id) {
      api('household/' + id)
        .then(res => {
          commit('setHousehold', res.data.data)
        })
        .catch(handleError)
    },
    getPrize({ commit, dispatch }, prize) {
      api('household/' + prize.householdId + "/prize/" + prize._id)
        .then(res => {
          commit('setPrize', res.data.data)
        })
        .catch(handleError)
    },
    createHousehold({ commit, dispatch }, household) {
      api.post('household/', household)
        .then(res => {
          dispatch('getHousehold')
        })
        .catch(handleError)
    },
    createPrize({ commit, dispatch }, prize) {
      api.post('prize/', prize)
        .then(res => {
          dispatch('getPrize')
        })
        .catch(handleError)
    },
  }

})