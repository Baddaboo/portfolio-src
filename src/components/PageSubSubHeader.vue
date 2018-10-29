<template>
  <div>
    <h3 class="section-header" :style="headerStyle">{{title}}</h3>
    <spacer vertical="20px" />
  </div>
</template>
<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageSubSubHeader',
  components: {
    Spacer
  },
  props: {
    title: String,
    align: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      headerStyle: {
        textAlign: this.align
      }
    }
  }
}
</script>
