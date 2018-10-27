<template>
  <div class="page-section-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  components: {
  },
  props: {
    title: String
  },
  mounted () {
  }
}
</script>

<style scoped>
.page-section-container {
  padding: 20px;
  margin-bottom: 40px;
}
</style>
