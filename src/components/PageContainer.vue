<template>
  <div class="outer-container">
    <div class="inner-container">
      <slot />
    </div>
    <spacer vertical="100px" />
  </div>
</template>

<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageContainer',
  components: {
    Spacer
  }
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
