<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '@/types/types'
import ActivitiesList from '@/components/activities/ActivitiesList.vue'
import ActivitiesEmpty from '@/components/activities/ActivitiesEmpty.vue'
import { getActivities } from '@/services/activities-service'

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
  components: { ActivitiesList, ActivitiesEmpty }
})
</script>

<template>
  <!-- Activities Filter -->
  <div>
    <h1>Activities</h1>
    <input v-model="query" type="search" placeholder="Search activities" />
  </div>
  <ActivitiesList :activities="activities" v-if="activities?.length > 0" />
  <ActivitiesEmpty v-else />
</template>
