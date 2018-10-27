<template>
  <div class="inline-horizontal-container">
    <div class="inner-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineHorizontal'
}
</script>

<style scoped>
.flex-horizontal-container {
  display: inline-block;
}
.inner-container {
  margin: auto;
}
</style>
