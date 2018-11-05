<template>
  <div id="container" class="base">
    <HeroIntro id="hero" :class="['hero-text', showCards ? 'hero-text-final' : 'hero-text-initial']" :animation-state="animationState" :additionalTexts="heroTexts"/>
    <div id="home-sections" v-show="showCards">
      <HomeSection :big-title="'Play'" :cards="playCards" />
      <HomeSection :big-title="'Work'" :cards="workCards" />
      <HomeSection :big-title="'Learn'" :cards="learnCards" />
    </div>
  </div>
</template>

<script>
import HeroIntro from '../components/HeroIntro.vue'
import HomeSection from '../components/HomeSection.vue'
import { global } from '../main.js'

export default {
  name: 'Home',
  components: {
    HeroIntro,
    HomeSection
  },
  data () {
    return {
      animationState: -1,
      showCards: false,
      heroTexts: [
        'motivate',
        'delight',
        'inspire',
        'simplify',
        'make things',
        'move',
        'teach',
        'humanize',
        'dare',
        'break things'
      ],
      playCards: [
        { color: '#396ba0',
          bgSrc: require('../assets/ck-bg.png'),
          fgSrc: require('../assets/ck-logo.png'),
          fgText: 'ClassicKit',
          link: '/classickit'
        },
        { color: '#ff9400',
          bgSrc: require('../assets/prahvi-bg.png'),
          fgSrc: require('../assets/prahvi-logo.png'),
          fgText: 'PRAHVI (Wearable)',
          link: '/prahvi'
        },
        { color: '#ef5fa7',
          bgSrc: require('../assets/easylayout-bg.png'),
          fgSrc: require('../assets/easylayout-fg.png'),
          fgText: 'EasyLayout',
          link: '/easylayout'
        },
        { color: '#3b5998',
          bgSrc: require('../assets/fb-bg.png'),
          fgSrc: require('../assets/facebook-fg.png'),
          fgText: 'Facebook App Tinkering',
          link: '/facebook'
        }
      ],
      workCards: [
        { color: '#004486',
          bgSrc: require('../assets/workday-bg.png'),
          fgSrc: require('../assets/workday-logo.png'),
          fgText: 'UX Mobile',
          link: '/workday'
        },
        { color: '#15b7ff',
          bgSrc: require('../assets/tiger-bg.png'),
          fgSrc: require('../assets/tiger-logo.png'),
          fgText: 'Tiger App',
          link: '/tigerapp'
        },
        { color: '#ffca11',
          bgSrc: require('../assets/wsos-bg.png'),
          fgSrc: require('../assets/wsos-logo.png'),
          fgText: 'Skills that Shine',
          fgTextColor: '#222',
          link: '/wsos'
        },
        { color: '#e73d30',
          bgSrc: require('../assets/yelp-bg.png'),
          fgSrc: require('../assets/yelp-logo.png'),
          fgText: 'ReaderX Mobile',
          link: '/yelp'
        }
      ],
      learnCards: [
        { color: '#000',
          bgSrc: require('../assets/google-bg.png'),
          fgSrc: require('../assets/google-fg.png'),
          fgText: 'MS Capstone (In Progress)'
        },
        { color: '#2f383d',
          fgSrc: require('../assets/amazon-fg.png'),
          fgText: 'Amazon Global Security (Coming Soon)'
          // link: '/amazon'
        },
        { color: 'rgba(255, 0, 0, 0.5)',
          fgSrc: require('../assets/susan-fg.png'),
          fgText: 'Susan (Coming Soon)'
          // link: '/susan'
        },
        { color: 'rgba(0, 0, 255, 0.5)',
          bgSrc: require('../assets/hermes-bg.png'),
          fgSrc: require('../assets/hermes-fg.png'),
          fgText: 'Project Hermes (Coming Soon)'
          // link: '/hermes'
        }
      ]
    }
  },
  mounted () {
    var self = this

    if (global.$data.didAppear) {
      self.$nextTick(() => {
        self.showCards = true
        self.animationState = 2
        global.$emit('showToolbar')
      })
    } else {
      setTimeout(() => {
        self.animationState = 0
        setTimeout(() => {
          self.animationState = 1
          setTimeout(() => {
            self.showCards = true
            global.$emit('showToolbar')

            setTimeout(() => {
              self.animationState = 2
              global.$data.didAppear = true
            }, 2000)
          }, 2000)
        }, 2000)
      }, 1000)
    }

    global.hideToolbarSubtext()
  }
}
</script>

<style scoped>
.hero-text {
  width: 100%;
  transition: height 1s, margin-top 1s;
}
.hero-text-initial {
  height: 100vh;
}
.hero-text-final {
  margin-top: 8em;
  height: 40vh;
}
.base {
  display: inline-block;
  width: 100vw;
}
</style>
