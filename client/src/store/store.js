import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        feedbackCount: 0
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token
            state.isUserLoggedIn = !!token;
        },
        setUser: (state, user) => {
            state.user = user
        },
        incrementCount: (state) => {
            state.feedbackCount++;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        },
        incrementCount ({commit}) {
            commit('incrementCount')
        }
    }
})