<template>
  <div class="flex-horizontal-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexHorizontal'
}
</script>

<style scoped>
.flex-horizontal-container {
  display: flex;
  flex-direction: row;
}
</style>
