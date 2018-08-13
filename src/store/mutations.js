import firebase from 'firebase/app';
import 'firebase/auth';

function addActivity(state, activity) {
  state.activities.unshift(activity);
}

function loadActivity(state, activity) {
  state.activities.push(activity);
}

export default {
  setCurrentUser(state) {
    state.currentUser = firebase.auth().currentUser;
  },
  setReady(state) {
    state.ready = true;
  },
  setBusy(state, status) {
    state.busy = status;
  },
  nextPage(state) {
    state.page += 1;
  },
  receiveAll(state, activities) {
    activities.forEach((activity) => {
      loadActivity(state, activity);
    });
  },
  receiveActivity(state, activity) {
    addActivity(state, activity);
  },
  removeActivity(state, activity) {
    state.activities.splice(state.activities.indexOf(activity), 1);
  },
  editActivity(state, { activity, value }) {
    const index = state.activities.indexOf(activity);
    state.activities[index].content = value;
  },
};
