<template lang="html">
  <div class="login">
    <h1>login</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';
import router from './../router';

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult) {
      // Push to welcome page if user is not null.
      if (authResult.user) {
        router.push('/');
      }
      // Do not redirect.
      return false;
    },
  },
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'https://dhakadesk.com',
  // Privacy policy url.
  privacyPolicyUrl: 'https://dhakadesk.com',
};

console.log('root login');

export default {
  created() {
    console.log('PageLogin created');
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
    console.log('PageLogin mounted');
  },
};
</script>

<style lang="css">
</style>
