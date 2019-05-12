import Vue from 'vue'
import Vuex from 'vuex'
import navigation from '@/data/navigation'
import contact from '@/data/contact'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    // configurations
    navigation,
    contact
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
