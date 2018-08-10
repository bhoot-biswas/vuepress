<template lang="html">
    <div class="media">
        <img class="mr-3" :src="activity.user_avatar.thumb">
        <div class="media-body">
            <div v-html="activity.title"></div>
            <div class="small">
                {{ activityDate( activity.date ) }}
                <button class="destroy" @click="removeActivity(activity)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  name: 'ActivityListItemMedia',
  props: ['activity'],
  methods: {
    ...mapActions([
      'removeActivity',
    ]),
    activityDate(date) {
      return moment(date).fromNow();
    },
  },
};
</script>

<style lang="css">
</style>
