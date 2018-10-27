<template>
  <div class="spacer-container" :style="{minWidth:horizontal,minHeight:vertical}">
  </div>
</template>

<script>
export default {
  name: 'PageGlance',
  props: {
    horizontal: 0,
    vertical: 0
  }
}
</script>

<style scoped>
.spacer-container {
  padding: 0;
  margin: 0;
}
</style>
