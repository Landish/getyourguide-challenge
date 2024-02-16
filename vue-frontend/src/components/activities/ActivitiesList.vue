<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '@/types/types'
import ActivitiesCard from '@/components/activities/ActivitiesCard.vue'

export default defineComponent({
  name: 'activities-list',
  props: {
    activities: {
      type: Array as () => Activity[],
      required: true
    }
  },
  components: { ActivitiesCard }
})
</script>

<template>
  <div class="activities__container" data-testid="activities-list">
    <ActivitiesCard v-for="activity in activities" :activity="activity" :key="activity.id" />
  </div>
</template>

<style lang="scss">
.activities {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 20px;
  }
}
</style>
