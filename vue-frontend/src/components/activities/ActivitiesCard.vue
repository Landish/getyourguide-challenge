<script lang="ts">
import { defineComponent } from 'vue'
import type { Activity } from '@/types/types'

export default defineComponent({
  name: 'activities-card',
  props: {
    activity: {
      type: Object as () => Activity,
      required: true
    }
  }
})
</script>

<template>
  <div class="activities__card" data-testid="activities-card">
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

<style lang="scss">
.activities {
  &__card {
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
