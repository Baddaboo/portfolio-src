<template>
  <div class="inner-container">
    <img class="cover-photo" :src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: 'PageHero',
  components: {
  },
  props: {
    imageSrc: String
  },
  mounted () {
  }
}
</script>

<style scoped>
.cover-photo {
  width: 100%;
}
.inner-container {
}
</style>
