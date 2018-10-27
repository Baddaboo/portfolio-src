<template>
  <div class="outer-container">
    <spacer vertical="30px" />
    <div :class="['images-container', containerType, responsive ? 'responsive-container' : '']">
      <div class="inner-container" v-for="src in srcs" :key="src.id">
        <img class="images-image" :src="src" />
      </div>
    </div>
    <spacer vertical="30px" />
  </div>
</template>

<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageImages',
  components: {
    Spacer
  },
  props: {
    srcs: Array,
    type: String,
    responsive: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    containerType: function () {
      if (this.type === 'half') {
        return { 'container-half': true }
      }
      if (this.type === 'third') {
        return { 'container-third': true }
      }
      return { 'container-full': true }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .responsive-container {
    width: 100% !important;
  }
}
.container-half {
  width: 50%;
}
.container-third {
  width: 33%;
}
.container-full {
  width: 100%;
}
.images-image {
  width: 100%;
}
.inner-container {
  display:flex;
  overflow:hidden;
  align-items: center;
  justify-content: center;
}
.images-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.outer-container {
  width: 100%;
  display: inline-block;
}
</style>
