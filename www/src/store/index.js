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
  error: {}

}

let handleError = (err) =>{
  state.error = err
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
    setLogin(state, user) {
      state.user = user
    },
  },
  actions: {
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          debugger
          console.log(res)
          commit('setLogin', res.data.data)
        })
        .catch(handleError)
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
    }
  }

})