import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS (state, data) {
      state.users = data
    }
  },
  actions: {
    async fetchUsers (context) {
      try {
        const user = await axios.get('url-to-your-api-server')
        context.commit('SET_USERS', user.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
