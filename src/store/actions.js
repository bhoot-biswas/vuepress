import * as api from './../api';

export default {
  setCurrentUser({ commit }) {
    commit('setCurrentUser');
  },
  setReady({ commit }) {
    commit('setReady');
  },
  getAllActivities({ commit, state }) {
    if (state.busy) {
      console.log('busy');
    } else {
      commit('setBusy', true);
      api.getAllActivities({ page: state.page, per_page: state.perPage }, (activities) => {
        commit('receiveAll', activities);
        commit('nextPage');
        commit('setBusy', false);
      });
    }
  },
  addActivity({ commit }, payload) {
    api.addActivity(payload, (activity) => {
      commit('receiveActivity', activity);
    });
  },
  editActivity({ commit }, payload) {
    api.editActivity(payload, (activity, value) => {
      commit('editActivity', { activity, value });
    });
  },
  removeActivity({ commit }, payload) {
    api.removeActivity(payload, (activity) => {
      commit('removeActivity', activity);
    });
  },
};
