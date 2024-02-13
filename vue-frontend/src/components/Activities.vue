<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '../types'
import ActivitiesList from './ActivitiesList.vue'
import { getActivities } from './activities-service'

export default defineComponent({
  name: 'activities-component',
  data() {
    return {
      query: '',
      activities: [] as Activity[]
    }
  },
  watch: {
    query: {
      handler() {
        this.fetchActivities()
      }
    }
  },
  methods: {
    async fetchActivities() {
      this.activities = await getActivities({
        withSupplier: true,
        title: this.query
      })
    }
  },
  async mounted() {
    this.fetchActivities()
  },
  components: { ActivitiesList }
})
</script>

<template>
  <!-- Activities Filter -->
  <div>
    <h1>Activities</h1>
    <input v-model="query" type="search" placeholder="Search activities" />
  </div>
  <!-- Activities ist -->
  <ActivitiesList :activities="activities" />
</template>

<style lang="scss">
h1 {
  text-align: center;
}
input {
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
}
</style>
