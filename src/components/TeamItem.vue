<template>
  <div class="team-container" >
    <li v-for="item in items" :key="item.id">
      <strong>
        <a v-if="item.url != null && item.role != null" :href="item.url" class="link">
          {{item.name}}:
        </a>
        <a v-else-if="item.url != null && item.role == null" :href="item.url" class="link">
          {{item.name}}
        </a>
        <a v-else-if="item.url == null && item.role != null">
          {{item.name}}:
        </a>
        <a v-else>
          {{item.name}}
        </a>
      </strong> {{item.role}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'TeamItem',
  props: {
    items: Array
  }
}
</script>

<style scoped>
li {
  margin-left: 10px;
}
.team-container {
  display: flex;
  flex-direction: column;
}
</style>
