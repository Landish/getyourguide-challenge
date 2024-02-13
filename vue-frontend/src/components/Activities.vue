<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '../types'
import ActivitiesList from './ActivitiesList.vue'

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
  computed: {
    url() {
      return `http://localhost:3000/activities?withSupplier=true&title=${this.query}`
    }
  },
  methods: {
    async fetchActivities() {
      const response = await fetch(this.url)
      this.activities = await response.json()
    }
  },
  async mounted() {
    this.fetchActivities()
  },
  components: { ActivitiesList }
})
</script>

<template>
  <!-- Filter form -->
  <div>
    <h1>Activities</h1>
    <input v-model="query" type="search" placeholder="Search activities" />
  </div>
  <!-- Activities list -->
  <ActivitiesList :activities="activities" />
</template>

<style lang="scss">
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
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
