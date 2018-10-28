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
    <div v-if="link != null">
      <spacer vertical="30px" />
      <a :href="link.url" class="link glance-link">
        {{link.text == null ? link.url : link.text}}
        <div>
          <font-awesome-icon class="go-icon" icon="arrow-alt-circle-right" />
        </div>
      </a>
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
    textColor: String,
    link: Object
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
.glance-link {
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.go-icon {
  padding-top: 3px;
  padding-left: 10px;
}
</style>
