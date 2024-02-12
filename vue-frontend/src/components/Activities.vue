<script lang="ts">
export default {
  name: 'activities-component',
  data() {
    return {
      query: '',
      activities: []
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:3000/activities')
    this.activities = await response.json()
  },

  computed: {
    filteredActivities() {
      return this.activities.filter((activity: any) => {
        return activity.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<template>
  <!-- Filter form -->
  <div>
    <h1>Activities</h1>
    <input type="text" v-model="query" placeholder="Search activities" />
    {{ query }}
  </div>
  <!-- Activities list -->
  <div class="activities__container">
    <div v-for="activity in filteredActivities" :key="activity.id" class="activities">
      <div class="activities__activity">
        <h3>{{ activity.title }}</h3>
        <p>{{ activity.price }}{{ activity.currency }}</p>
        <p>{{ activity.specialOffer ? 'special' : 'not special' }}</p>
        <p>
          {{ activity.supplier.name }} {{ activity.supplier.country }} {{ activity.supplier.city }}
        </p>
      </div>
    </div>
  </div>
  <pre>{{ activities }}</pre>
</template>

<style lang="scss">
.activities {
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
  &__activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin: 0 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 1px solid #000;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
}

@media screen and (min-width: 768px) {
  .activities {
    &__container {
      width: 100%;
      padding: 0;
      row-gap: 20px;
    }
  }
}
</style>
