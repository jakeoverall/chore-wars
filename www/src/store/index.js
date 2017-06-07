import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 2000,
  withCredentials: true
})

let state = {
  user: {},
  error: {}

}

let handleError = (state, err) =>{
  state.err = err
}

export default new Vuex.Store({
  state,
  mutations: {
    setUser(state, user) {
      state.user = user
    }
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
    }
  }

})