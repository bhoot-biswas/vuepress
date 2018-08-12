import * as api from './../api';

export default {
  setCurrentUser({ commit }) {
    commit('setCurrentUser');
  },
  getAllActivities({ commit }) {
    api.getAllActivities((activities) => {
      commit('receiveAll', activities);
    });
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
