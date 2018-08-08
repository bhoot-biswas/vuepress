import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  setCurrentUser(state) {
    state.currentUser = firebase.auth().currentUser;
  },
};
