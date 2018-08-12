<template lang="html">
    <div class="card" :class="{ editing: editing }">
        <div class="card-header">
          #{{ activity.id }}
            <activity-list-item-media v-bind:activity="activity"></activity-list-item-media>
        </div>
        <div class="card-body">
            <span v-html="activity.content" @dblclick="editing = true"></span>
            <textarea
              class="form-control"
              rows="3"
              v-show="editing"
              v-focus="editing"
              :value="activity.content"
              @keyup.enter="doneEdit"
              @keyup.esc="cancelEdit"
              @blur="doneEdit"></textarea>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ActivityListItemMedia from './ActivityListItemMedia.vue';

export default {
  name: 'ActivityListItem',
  props: ['activity'],
  data() {
    return {
      editing: false,
    };
  },
  components: {
    ActivityListItemMedia,
  },
  directives: {
    focus(el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        });
      }
    },
  },
  methods: {
    ...mapActions([
      'editActivity',
      'removeActivity',
    ]),
    doneEdit(e) {
      const value = e.target.value.trim();
      const { activity } = this;
      if (!value) {
        this.removeActivity(activity);
      } else if (this.editing) {
        this.editActivity({
          activity,
          value,
        });
        this.editing = false;
      }
    },
    cancelEdit(e) {
      e.target.value = this.activity.content;
      this.editing = false;
    },
  },
};
</script>

<style lang="css">
</style>
