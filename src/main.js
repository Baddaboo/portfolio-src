import Vue from 'vue'
import VueRouter from 'vue-router'

import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faUserCircle, faEnvelope, faArrowAltCircleRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import './registerServiceWorker'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Amazon from './pages/Amazon.vue'
import ClassicKit from './pages/ClassicKit.vue'
import EasyLayout from './pages/EasyLayout.vue'
import Facebook from './pages/Facebook.vue'
import Hermes from './pages/Hermes.vue'
import Prahvi from './pages/Prahvi.vue'
import Susan from './pages/Susan.vue'
import Tiger from './pages/Tiger.vue'
import Workday from './pages/Workday.vue'
import Wsos from './pages/Wsos.vue'
import Yelp from './pages/Yelp.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResize)

library.add(faComment,
  faUserCircle,
  faEnvelope,
  faArrowAltCircleRight,
  faGithub,
  faLinkedin,
  faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/amazon', component: Amazon },
    { path: '/classickit', component: ClassicKit },
    { path: '/easylayout', component: EasyLayout },
    { path: '/facebook', component: Facebook },
    { path: '/hermes', component: Hermes },
    { path: '/prahvi', component: Prahvi },
    { path: '/susan', component: Susan },
    { path: '/tigerapp', component: Tiger },
    { path: '/workday', component: Workday },
    { path: '/wsos', component: Wsos },
    { path: '/yelp', component: Yelp }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  mode: 'history'
})

export const global = new Vue({
  data () {
    return {
      sizeClass: 'desktop',
      didAppear: false
    }
  },
  methods: {
    handleResize () {
      var width = window.innerWidth
      var newValue = ''

      if (width <= 600) {
        newValue = 'mobile'
      } else if (width <= 1024) {
        newValue = 'desktop'
      } else {
        newValue = 'extra-large'
      }

      if (newValue === this.sizeClass) { return }

      this.sizeClass = newValue
      this.$emit('appResized', newValue)
    },
    currentSizeClass () {
      return this.sizeClass
    },
    handleScroll () {
      this.$emit('appScrolled', window.scrollY)
    },
    setToolbarSubtext (newText) {
      this.$emit('setToolbarSubtext', newText)
    },
    hideToolbarSubtext () {
      this.$emit('hideToolbarSubtext')
    }
  },
  mounted () {
    this.handleResize()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
