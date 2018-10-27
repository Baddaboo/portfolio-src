<template>
  <div class="doublesection-container">
    <div class="left" :style="isMobile ? 'full-width' : leftStyle">
      <slot name="left" />
    </div>
    <spacer horizontal="30px" />
    <div class="right" :style="isMobile ? 'full-width' : rightStyle">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { global } from '../main.js'
import Spacer from './Spacer.vue'

export default {
  name: 'PageDoubleSection',
  components: {
    Spacer
  },
  data() {
    return {
      leftStyle: {
        width: this.proportion + '%'
      },
      rightStyle: {
        width: 100 - this.proportion + '%'
      },
      isMobile: false
    }
  },
  props: {
    proportion: {
      type: Number,
      default: 50
    }
  },
  mounted() {
    var self = this

    global.$on('appResized', sizeClass => {
      self.isMobile = sizeClass === "mobile"
    })
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
.doublesection-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .doublesection-container {
    flex-direction: column;
  }
}

</style>
