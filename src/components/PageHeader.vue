<template>
  <div>
    <spacer vertical="20px" />
    <h1 class="section-header">{{title}}</h1>
    <spacer vertical="40px" />
  </div>
</template>
<script>
import Spacer from './Spacer.vue'

export default {
  name: 'PageHeader',
  components: {
    Spacer
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
.section-header {
  text-align: center;
}
</style>
