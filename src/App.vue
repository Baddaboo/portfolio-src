<template>
    <div id="app">
        <toolbar :show="showToolbar" class="toolbar" />
        <transition :name="slideTransition" mode="out-in">
            <router-view class="content"></router-view>
        </transition>
        <div class="home-footer" v-show="showToolbar">
            <h4>
                Made from scratch with
                <a href="https://vuejs.org/" class="link">Vue.js</a>
            </h4>
            <h5>Copyright © 2018, Blake Tsuzaki</h5>
        </div>
        <resize-observer @notify="handleResize" />

        <fab class="fab" :show="isMobile && showToolbar" v-on:fab-clicked="toggleContactMenu" :is-close="showSocialOverlay" />
        <social-overlay :show="showSocialOverlay" v-on:hideSocialOverlay="hideContactMenu" />
    </div>
</template>

<script>
import Fab from './components/Fab.vue'
import Toolbar from './components/Toolbar.vue'
import SocialOverlay from './components/SocialOverlay.vue'
import { global } from './main.js'

export default {
  name: 'app',
  components: {
    Fab,
    Toolbar,
    SocialOverlay
  },
  methods: {
    handleResize () {
      global.handleResize()
    },
    hideContactMenu () {
      this.showSocialOverlay = false
    },
    toggleContactMenu () {
      this.showSocialOverlay = !this.showSocialOverlay
    }
  },
  watch: {
    '$route' (to, from) {
      this.slideTransition = to.path === '/' ? 'slide-down' : 'slide-up'
    }
  },
  data () {
    return {
      showToolbar: false,
      showSocialOverlay: false,
      isMobile: false,
      slideTransition: 'slide-up'
    }
  },
  mounted () {
    var self = this

    global.$on('showToolbar', () => {
      self.handleResize()
      self.showToolbar = true
    })

    global.$on('appResized', sizeClass => {
      self.isMobile = sizeClass === 'mobile'
      self.showSocialOverlay = !self.isMobile ? false : self.showSocialOverlay
    })

    if (this.$router.currentRoute.path !== '/') {
      self.showToolbar = true
    }

    global.$data.didAppear = true
    this.$nextTick(() => { self.handleResize() })
  }
}
</script>

<style scoped>
#app {
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.fab {
    z-index: 200;
}
.toolbar {
    z-index: 20;
}
.content {
    z-index: 2;
}
.home-footer {
    position: absolute;
    text-align: center;
    width: 100%;
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.5s;
}
.slide-up-enter, .slide-down-leave-active {
    transform: translateY(-100px);
    /* transform: perspective(100vh) rotateX(20deg); */
    /* transform: scale(0.5, 0.5); */
    /* transform: scale(1.05, 1.05); */
    /* transform: translateX(100px); */
    opacity: 0;
}
.slide-up-leave-active, .slide-down-enter  {
    transform: translateY(100px);
    /* transform: perspective(500px) rotateY(20deg); */
    /* transform: perspective(100vh) rotateX(-20deg); */
    /* transform: scale(1.05, 1.05); */
    /* transform: scale(0.95, 0.95); */
    /* transform: translateX(-100px); */
    opacity: 0;
}
</style>
