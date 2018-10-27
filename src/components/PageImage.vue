<template>
  <div class="inner-container">
    <spacer vertical="30px" />
    <img :class="[imageType, responsive ? 'responsive-container' : '']" :src="src" />
    <spacer vertical="30px" />
  </div>
</template>

<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageImage',
  components: {
    Spacer
  },
  props: {
    src: String,
    type: String,
    responsive: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    imageType: function () {
      if (this.type === 'half') {
        return { 'page-image-photo-half': true }
      }
      if (this.type === 'third') {
        return { 'page-image-photo-third': true }
      }
      return { 'page-image-photo-full': true }
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
.page-image-photo-half {
  width: 50%;
}
.page-image-photo-third {
  width: 33%;
}
.page-image-photo-full {
  width: 100%;
}
.inner-container {
  width: 100%;
  display: inline-block;
  text-align: center;
}
</style>
