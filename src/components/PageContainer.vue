<template>
  <div class="outer-container">
    <div class="inner-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>

<style scoped>
.inner-container {
  display: inline-block;
  width: 100%;
  max-width: 1024px;
}
.outer-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
</style>
