<template>
  <ul class="list-container" >
    <li v-for="item in items" :key="item.id">
      <a>{{item}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageList',
  props: {
    items: Array
  }
}
</script>

<style scoped>
li {
  margin-left: 10px;
}
ul {
  list-style-position: outside;
}
.list-container {
  display: flex;
  flex-direction: column;
}
</style>
