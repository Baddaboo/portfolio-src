<template>
  <color-container :color="color">
    <div v-if="role != null">
      <h4>My Role</h4>
      <p>{{role}}</p>
    </div>
    <div v-if="process != null">
      <spacer v-if="role != null" vertical="20px" />
      <h4>Process</h4>
      <p>{{process}}</p>
    </div>
    <div v-if="tools != null">
      <spacer v-if="process != null || role != null" vertical="20px" />
      <h4>Tools</h4>
      <p>{{tools}}</p>
    </div>
    <div v-for="item in additional" :key="item.id">
      <spacer v-if="!noOtherTexts()" vertical="20px" />
      <h4>{{item.title}}</h4>
      <p>{{item.content}}</p>
    </div>
    <slot />
  </color-container>
</template>

<script>
import ColorContainer from './ColorContainer.vue'
import Spacer from './Spacer.vue'

export default {
  name: 'PageGlance',
  components: {
    ColorContainer,
    Spacer
  },
  props: {
    role: String,
    process: String,
    tools: String,
    additional: Array,
    color: String,
    textColor: String
  },
  methods: {
    noOtherTexts () {
      return this.role == null && this.process == null && this.tools == null
    }
  },
  data () {
    return {
      containerStyle: {
        backgroundColor: this.color,
        color: this.textColor
      }
    }
  }
}
</script>

<style scoped>
h4 {
  margin: 0 0 10px 0;
}
</style>
