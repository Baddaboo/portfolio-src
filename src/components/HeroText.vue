<template>
  <div class="hero-text-base">
    <h2 class="primary-text">I make things that</h2>
    <div class="secondary-text-container">
      <transition name="fade" mode="out-in">
        <div class="secondary-text" v-show="state">
          <h2>{{textPrimary}}</h2>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div class="secondary-text" v-show="!state">
          <h2>{{textSecondary}}</h2>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroText',
  data () {
    return {
      state: true,
      textPrimary: '',
      textSecondary: '',
      currentIndex: 0,
      animationInterval: null
    }
  },
  props: {
    texts: Array
  },
  methods: {
    nextText () {
      var self = this
      var text = self.texts[self.currentIndex]

      if (!self.state) { self.textPrimary = text } else { self.textSecondary = text }

      if (self.currentIndex >= self.texts.length - 1) { self.currentIndex = 0 } else { self.currentIndex += 1 }

      self.state = !self.state
    },
    startAnimation () {
      var self = this

      self.animationInterval = setInterval(() => {
        self.nextText()
      }, 3000)
    },
    stopAnimation () {
      if (this.animationInterval != null) {
        clearInterval(this.animationInterval)
      }
    }
  },
  mounted () {
    this.textPrimary = this.texts[0]
    this.textSecondary = this.texts[1]
    this.currentIndex = 2
  }
}
</script>

<style scoped>
.hero-text-base {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-text {
  font-weight: normal;
}

.secondary-text {
  position: absolute;
  padding-left: 0.5em;
}
.secondary-text-container {
  width: 120px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s cubic-bezier(0.5,0,0.5,1.5);
}
.fade-enter {
  transform: translateY(100%);
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
