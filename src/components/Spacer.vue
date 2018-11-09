<template>
  <div class="spacer-container" :style="{minWidth:horizontal,minHeight:vertical}">
  </div>
</template>

<script>
export default {
  name: 'PageGlance',
  props: {
    horizontal: {
      type: String,
      default: '0px'
    },
    vertical: {
      type: String,
      default: '0px'
    }
  }
}
</script>

<style scoped>
.spacer-container {
  padding: 0;
  margin: 0;
}
</style>
