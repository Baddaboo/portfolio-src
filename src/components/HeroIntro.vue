<template>
  <div id="container" class="hero-intro-base">
    <transition name="slide">
      <h1 v-show="this.animationState == 0">Hi, I'm Blake</h1>
    </transition>
    <transition name="slide">
      <h1 v-show="this.animationState == 1">I'm a designer + engineer</h1>
    </transition>
    <transition name="slide">
      <HeroText ref="heroText" v-show="this.animationState == 2" :texts="additionalTexts" />
    </transition>
  </div>
</template>

<script>
import HeroText from './HeroText.vue'

export default {
  name: 'HeroIntro',
  components: { HeroText },
  props: {
    animationState: Number,
    additionalTexts: Array
  },
  watch: {
    animationState: function (newValue) {
      if (newValue === 2) {
        this.$refs.heroText.startAnimation()
      }
    }
  },
  data () {
    return {
      animateAdditional: false
    }
  }
}
</script>

<style scoped>
h1 {
  position: absolute;
  width: 100%;
}
.hero-intro-base {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s cubic-bezier(0.5,0,0.5,1.5);
}
.slide-enter {
  transform: translateY(100%);
  /* transform: scale(1.5, 1.5); */
  /* transform: scale(0.5, 0.5); */
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-100%);
  /* transform: scale(0.5, 0.5); */
  /* transform: scale(1.5, 1.5);  */
  opacity: 0;
}
</style>
