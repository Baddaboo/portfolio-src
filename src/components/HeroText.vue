<template>
  <div class="hero-text-base">
    <h2 class="primary-text">I make things that</h2>
    <div class="secondary-text-container" :style="{width:calculatedWidth}">
      <transition name="fade" mode="out-in">
        <div ref="displayText1" class="secondary-text" v-show="state">
          <h2>{{textPrimary}}</h2>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div ref="displayText2" class="secondary-text" v-show="!state">
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
      animationInterval: null,
      calculatedWidth: '120px'
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

      this.$nextTick(()=>{
        var currentView = self.currentView()
        if (currentView != null) {
          var style = window.getComputedStyle(currentView)
          var calculatedWidth = style.getPropertyValue('width')
          self.calculatedWidth = calculatedWidth
        }
      })
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
    },
    currentView () {
      var view = this.state ? this.$refs.displayText1 : this.$refs.displayText2
      return view
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
  display: block;
  position: absolute;
}
.secondary-text-container {
  margin-left: 0.5em;
  transition: width 0.5s;
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
