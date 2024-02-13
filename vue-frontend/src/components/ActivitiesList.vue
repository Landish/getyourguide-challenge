<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '../types'

export default defineComponent({
  name: 'activities-list',
  props: {
    activities: {
      type: Array as () => Activity[],
      required: true
    }
  }
})
</script>

<template>
  <div class="activities__container">
    <template v-for="activity in activities" :key="activity.id">
      <div class="activities__activity">
        <h3>{{ activity.title }}</h3>
        <p>Price: {{ activity.price }}{{ activity.currency }}</p>
        <p>Rating: {{ activity.rating }}</p>
        <p>{{ activity.specialOffer ? 'Special Offer' : '' }}</p>
        <p>Supplier: {{ activity?.supplier?.name }}</p>
        <p>
          Location: {{ activity?.supplier?.address }}{{ activity?.supplier?.city
          }}{{ activity?.supplier?.country }} {{ activity?.supplier?.zip }}
        </p>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.activities {
  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  &__activity {
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;

    h3 {
      margin: 0;
    }
  }
}
</style>
