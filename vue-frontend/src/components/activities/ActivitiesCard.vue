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
  },
  computed: {
    supplierLocationFormatted(): string {
      const { address, city, country, zip } = this.activity.supplier!
      return `${address}, ${zip} ${city}, ${country}`
    }
  }
})
</script>

<template>
  <div class="activities__card" data-testid="activities-card">
    <h2>{{ activity.title }}</h2>
    <p>Price: {{ activity.price }}{{ activity.currency }}</p>
    <p>Rating: {{ activity.rating }}</p>
    <p>{{ activity.specialOffer ? 'Special Offer' : '' }}</p>
    <p>Supplier: {{ activity?.supplier?.name }}</p>
    <p>Location: {{ supplierLocationFormatted }}</p>
  </div>
</template>

<style lang="scss">
.activities {
  &__card {
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;

    h2 {
      margin: 0;
      font-size: 1.25rem;
    }
  }
}
</style>
