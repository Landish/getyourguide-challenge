<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'activities-filter',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      // Use debounce to avoid making too many requests
      this.$emit('search', this.query)
    }
  }
})
</script>

<template>
  <div class="activities__filter" data-testid="activities-filter">
    <h1>Activities</h1>
    <input v-model="query" @input="search" type="search" placeholder="Search activities" />
  </div>
</template>

<style scoped lang="scss">
.activities {
  &__filter {
    text-align: center;
  }
}
</style>
