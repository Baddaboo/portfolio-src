<template>
  <div class="home-section-container">
    <div class="home-section">
      <div class="big-title">
        <h1>{{bigTitle}}</h1>
      </div>
      <div class="home-card-group">
        <HomeCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue'

export default {
  name: 'HomeSection',
  components: {
    HomeCard
  },
  props: {
    bigTitle: String,
    cards: Array
  }
}
</script>

<style scoped>
h1 {
  font-size: 15vw;
}
.big-title {
  margin-bottom: -6.5%;
}
.home-card-group {
  padding-top: 14vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.home-section-container {
  width: 100%;
  z-index: 2;
  padding-bottom: 20%;
}

@media screen and (min-width: 1025px) {
  h1 {
    font-size: 154px;
  }
  .home-card-group {
    padding-top: 144px;
  }
  .home-section-container {
    padding-bottom: 205px;
  }
}

.home-section {
  height: 100%;
  width: 100%;
  max-width: 1025px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
