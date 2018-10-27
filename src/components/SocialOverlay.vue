<template>
  <transition name="appear">
    <div class="social-overlay-container" v-show="show" v-on:click="handleClick">
      <transition name="slide">
        <div class="contact-container" v-show="show">
          <a class="social-icon-container" href="https://github.com/Baddaboo">
            <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
            <h2>Github</h2>
          </a>
          <a class="social-icon-container" href="https://www.linkedin.com/in/blaketsuzaki">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
            <h2>LinkedIn</h2>
          </a>
          <a class="social-icon-container" href="mailto:blake589t@gmail.com">
            <font-awesome-icon icon="envelope" class="social-icon" />
            <h2>Email</h2>
          </a>
          <router-link class="social-icon-container" to="/about">
            <font-awesome-icon icon="user-circle" class="social-icon" />
            <h2>About Me</h2>
          </router-link>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Spacer from './Spacer.vue'

export default {
  name: 'SocialOverlay',
  components: {
    Spacer
  },
  methods: {
    handleClick () {
      this.$emit('hideSocialOverlay')
    }
  },
  props: {
    show: false
  }
}
</script>

<style scoped>
h2 {
  margin-left: 20px;
}
.social-overlay-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.contact-container {
  width: 100%;
  padding-bottom: 100px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.social-icon-container {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.social-icon {
  font-size: 1.5em;
  width: 1.5em;
  color: #2c3e50;
}
.appear-enter-active, .appear-leave-active {
  transition: all 0.3s;
}
.appear-enter, .appear-leave-to {
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-enter, .slide-leave-to {
  transform: translate(0,100%);
}
</style>
