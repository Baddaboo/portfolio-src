<template>
  <div class="toolbar-container">
    <transition name="toolbarSlide">
      <div :class="['toolbar-internal', shadowEnabled ? 'toolbar-internal-shadow' : '']" v-show="show">
        <router-link class="left-container" to="/">
          <h2 v-if="useShortName">BT</h2>
          <h2 v-else>Blake Tsuzaki</h2>
          <div class="subnav">
            <transition name="textSlide">
              <h2 v-show="showSubtext">/ {{subtext}}</h2>
            </transition>
          </div>
        </router-link>
        <transition name="social-menu">
          <div class="right-container" v-if="!isMobile">
            <a class="social-icon-container" href="https://github.com/Baddaboo">
              <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
            </a>
            <a class="social-icon-container" href="https://www.linkedin.com/in/blaketsuzaki">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
            </a>
            <a class="social-icon-container" href="mailto:blake589t@gmail.com">
              <font-awesome-icon icon="envelope" class="social-icon" />
            </a>
            <router-link class="social-icon-container" to="/about">
              <font-awesome-icon icon="user-circle" class="social-icon" />
            </router-link>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { global } from '../main.js'

export default {
  name: 'Toolbar',
  data () {
    return {
      useShortName: false,
      isMobile: true,
      subtext: '',
      showSubtext: false,
      shadowEnabled: false,
      scrollPositionTop: true
    }
  },
  props: {
    show: false
  },
  methods: {
    updateSizing (sizeClass) {
      this.isMobile = sizeClass === 'mobile'
      this.useShortName = this.isMobile
    },
    updateShadow () {
      this.shadowEnabled = !this.scrollPositionTop
    }
  },
  mounted () {
    var self = this

    global.$on('appResized', sizeClass => {
      self.updateSizing(sizeClass)
      self.updateShadow()
    })

    global.$on('setToolbarSubtext', subtext => {
      if (typeof subtext === 'string') {
        self.subtext = subtext
      }
    })

    global.$on('appScrolled', scrollY => {
      var scrollPositionTop = scrollY <= 0
      if (scrollPositionTop !== self.scrollPositionTop) {
        self.scrollPositionTop = scrollPositionTop
        self.updateShadow()
      }
    })

    global.$on('setToolbarSubtext', newText => {
      self.subtext = newText
      self.showSubtext = true
    })

    global.$on('hideToolbarSubtext', () => {
      self.showSubtext = false
    })

    self.updateSizing()
    self.updateShadow()
  }
}
</script>

<style>
h3 {
  padding: 0;
}
.subnav {
  margin-left: 0.5em;
  color: gray;
  overflow: hidden;
}

.left-container {
  position: relative;
  display: flex;
  text-align: left;
  align-items: center;
}

.right-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.social-icon-container {
  display: flex;
  padding-left: 1.8em;
  align-items: center;
}

.social-icon {
  font-size: 1.5em;
  color: #2c3e50;
}

.toolbar-internal {
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background: white;
  max-width: 1020px;
  margin: auto;

  transition: box-shadow 0.5s;
}

.toolbar-internal-shadow {
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
}

@media screen and (min-width: 601px) {
  .toolbar-internal {
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-left: 1.5em;
    padding-right: 1.8em;
    font-size: 1em;
  }
}

@media screen and (min-width: 1025px) {
  .toolbar-internal-shadow {
    box-shadow: 0px 5px 5px -5px rgba(0,0,0,0.4);
  }
}

@media screen and (max-width: 600px) {
  .toolbar-internal {
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1em;
  }
}

.toolbar-container {
  position: fixed;
  width: 100%;
  background: transparent;
  display: inline-block;
}

.toolbarSlide-enter-active,
.textSlide-enter-active,
.textSlide-leave-active {
  transition: all 0.5s;
}

.toolbarSlide-enter {
  transform: translateY(-100%);
}

.textSlide-enter, .textSlide-leave-to {
  transform: translateX(-100%);
}

.social-menu-enter-active, .social-menu-leave-active {
  transition: all 0.2s;
}
.social-menu-enter, .social-menu-leave-to {
  transform: translateY(-3em);
  opacity: 0;
}
</style>
