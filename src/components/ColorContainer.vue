<template>
  <div class="container" :style="containerStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ColorContainer',
  props: {
    color: String
  },
  data () {
    return {
      containerStyle: {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
