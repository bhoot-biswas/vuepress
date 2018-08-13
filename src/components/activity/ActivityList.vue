<template>
<div class="hello">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <activity-post-form></activity-post-form>
        <activity-list-item
            v-for="activity in activities"
            v-bind:key="activity.id"
            v-bind:activity="activity">
        </activity-list-item>
        <div
          v-infinite-scroll="loadActivities"
          infinite-scroll-disabled="ready"
          infinite-scroll-distance="10">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import { mapActions, mapGetters } from 'vuex';

import ActivityPostForm from './ActivityPostForm.vue';
import ActivityListItem from './ActivityListItem.vue';

Vue.use(infiniteScroll);

export default {
  name: 'ActivityList',
  components: {
    ActivityPostForm,
    ActivityListItem,
  },
  methods: {
    ...mapActions([
      'getAllActivities',
    ]),
    loadActivities() {
      console.log(this.isReady);
      this.getAllActivities();
    },
  },
  computed: {
    ...mapGetters([
      'activities',
      'isReady',
    ]),
    ready() {
      return !this.isReady;
    },
  },
};
</script>

<style scoped>
</style>
