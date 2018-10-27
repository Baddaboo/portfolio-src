<template>
    <div id="container" class="base">
    </div>
</template>

<script>
import { global } from '../main.js'

export default {
  name: 'Amazon',
  components: {
  },
  mounted () {
    global.setToolbarSubtext('Amazon')
  }
}
</script>

<style scoped>

.base {
    display: inline-block;
    height: 100vh;
    width: 100vw;
}
</style>
