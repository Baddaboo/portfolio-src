<template>
  <div class="doublesection-container">
    <div class="left" :style="isMobile ? fullStyle : leftStyle">
      <slot name="left" />
    </div>
    <spacer horizontal="30px" />
    <div class="right" :style="isMobile ? fullStyle : rightStyle">
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
  data () {
    return {
      fullStyle: { width: '100%' },
      isMobile: false
    }
  },
  computed: {
    leftStyle: function () {
      return { width: this.proportion + '%' }
    },
    rightStyle: function () {
      return { width: 100 - this.proportion + '%' }
    }
  },
  props: {
    proportion: {
      type: Number,
      default: 50
    }
  },
  methods: {
    handleResize (sizeClass) {
      this.isMobile = sizeClass === 'mobile'
    }
  },
  mounted () {
    var self = this

    global.$on('appResized', sizeClass => {
      self.handleResize(sizeClass)
    })

    this.$nextTick(() => {
      self.handleResize(global.currentSizeClass())
    })
  }
}
</script>

<style scoped>
.doublesection-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .doublesection-container {
    flex-direction: column;
    align-items: stretch;
  }
}

</style>
