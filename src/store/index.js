import Vue from 'vue'
import Vuex from 'vuex'
import navigation from '@/data/navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    // configurations
    navigation
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
