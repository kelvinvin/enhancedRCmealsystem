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
        feedbacks: []
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token
            state.isUserLoggedIn = !!token;
        },
        setUser: (state, user) => {
            state.user = user
        },
        incrementCount: (state, feedback) => {
            const feedbackExisting = state.feedbacks.includes(feedback)
            if (!feedbackExisting) {
                state.feedbacks.push(feedback)
            }
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        },
        incrementCount ({commit}, feedback) {
            commit('incrementCount', feedback)
        }
    }
})