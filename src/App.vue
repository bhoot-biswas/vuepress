<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

console.log('root app');

export default {
  name: 'App',
  created() {
    this.setCurrentUser();
    console.log('app created');
  },
  mounted() {
    console.log('app mounted');
  },
  methods: {
    ...mapActions([
      'setCurrentUser',
      'getAllActivities',
    ]),
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
