<template>
  <div>
    <h2 class="section-header" :style="headerStyle">{{title}}</h2>
    <spacer vertical="30px" />
  </div>
</template>
<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageSubHeader',
  components: {
    Spacer
  },
  props: {
    title: String,
    align: {
      type: String,
      default: 'center'
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
