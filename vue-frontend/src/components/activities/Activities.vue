<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '@/types/types'
import { findActivities } from '@/services/activities-service'
import ActivitiesFilter from '@/components/activities/ActivitiesFilter.vue'
import ActivitiesList from '@/components/activities/ActivitiesList.vue'
import ActivitiesEmpty from '@/components/activities/ActivitiesEmpty.vue'

export default defineComponent({
  name: 'activities-component',
  data() {
    return {
      activities: [] as Activity[]
    }
  },
  methods: {
    async fetchActivities(title?: string) {
      this.activities = await findActivities({
        withSupplier: true,
        title
      })
    },
    handleSearch(query: string | Event) {
      if (query instanceof Event) {
        query.preventDefault()
        return
      }

      this.fetchActivities(query)
    }
  },
  async mounted() {
    this.fetchActivities('')
  },
  components: { ActivitiesFilter, ActivitiesList, ActivitiesEmpty }
})
</script>

<template>
  <ActivitiesFilter @search="handleSearch" />
  <ActivitiesList :activities="activities" v-if="activities?.length > 0" />
  <ActivitiesEmpty v-else />
</template>
