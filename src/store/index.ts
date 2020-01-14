import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    active: 4
  },
  mutations: {
    SETACTIVE(state, param: number): void {
      state.active = param
    }
  },
  actions: {},
  modules: {},
  plugins: [
    ...(debug ? [createLogger()] : []),
    createPersistedState({
      reducer(val) {
        return {
          active: val.active
        }
      }
    })]
});
