<template>
  <page-container>
    <page-hero :image-src="fbCover" />
    <page-section>
      <page-header title="Facebook App Exploration" />
      <page-double-section>
        <div slot="left">
          In my free time, I like to <a
          href="https://en.wikipedia.org/wiki/Penetration_test" class="link">pen
          test</a> iOS and Android apps and see what other companies are up to
          along the way. One of my recent projects involved digging through the
          Facebook iOS app binary and fiddling with <a
          href="https://github.com/facebook/graphql" class="link">GraphQL
          requests</a> to peek at some unreleased features. This work combined
          my backgrounds in app development and embedded processing.
          <spacer vertical="20px" />
          <h2>Collaborators</h2>
          <spacer vertical="10px" />
          <team-item :items="collabItems" />
          <spacer vertical="30px" />
        </div>
        <page-glance
          slot="right"
          color="#cee0ff"
          role="iOS App Researcher"
          tools="iOS (Swift & Objective-C), LLDB, Hopper Disassembler, Cycrypt, Graph Explorer, and some other things"
          :link="{
            url: 'https://www.facebook.com/groups/whobrokethebuild/',
            text: 'See what we\'re up to'
          }"
          :additional="[
            { title: 'Type', content: 'Pen Testing & Research' },
            { title: 'Team', content: 'HH Facebook Changelog & Microaggressions' }
          ]" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-header title="In the Press" />
      <page-paragraph>
        <page-double-section :proportion="41">
          <page-image slot="left" :src="fbVoice" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Facebook Voice Assistant" />
            Facebook quietly worked on its own voice assistant to compete with
            Siri and Alexa. The code appeared in the <strong>production
            build</strong> of the app, suggesting the feature was close to
            release. <a
              href="https://www.businessinsider.com/facebook-siri-like-voice-assistant-code-spotted-in-the-wild-2017-9"
              class="link">
              I was featured in Business Insider
            </a> and various other tech blogs for the find!
            <spacer vertical="20px" />
            We later found references for <strong>"Project Aloha"</strong>
            throughout Facebook, even a setup bot for what would become
            <a href="https://portal.facebook.com/" class="link">
              Facebook Portal:
            </a>
            <br />
            <page-image :src="fbAloha" type="half" :shadow="true" />
          </div>
        </page-double-section>
        <page-double-section :proportion="41">
          <page-image slot="left" :src="fbSets" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Facebook Sets" />
            Sets is a new feature for users to curate and share posts just as
            they do on Pinterest. This feature was <strong>found shortly before
            it was tested</strong> in specific markets and was <a
              href="https://techcrunch.com/2017/10/19/facebook-attacks-pinterest-with-sets-of-posts/"
              class="link">
              featured in TechCrunch
            </a> and other publications!
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-header title="Some other things" />
      <page-paragraph>
        <flex-vertical>
          <page-double-section :proportion="21.9">
            <page-image slot="left" :src="fbBonfire1" />
            <page-image slot="right" :src="fbBonfire2" />
          </page-double-section>
          <h3>Bonfire</h3>
        </flex-vertical>
        <flex-horizontal>
          <div>
            <page-image :src="fbGif" />
            <h3>Profile GIFs</h3>
          </div>
          <spacer horizontal="30px" />
          <div>
            <page-images :srcs="fbQr" />
            <h3>QR Code Entry Points</h3>
          </div>
        </flex-horizontal>
        <flex-horizontal>
          <div>
            <page-images :srcs="fbFunFact" />
            <h3>Fun Facts</h3>
          </div>
          <spacer horizontal="30px" />
          <div>
            <page-image :src="fbStoryFilter" />
            <h3>Story Filters</h3>
          </div>
        </flex-horizontal>
        <flex-horizontal>
          <div>
            <page-image :src="fbDrawer" />
            <h3>More Menu Drawer</h3>
          </div>
          <spacer horizontal="30px" />
          <div>
            <page-images :srcs="fbFund" />
            <h3>Fundraisers</h3>
          </div>
        </flex-horizontal>
        <flex-horizontal>
          <div>
            <page-image :src="fbMovies" />
            <h3>Redesigned Movies</h3>
          </div>
          <spacer horizontal="30px" />
          <div>
            <page-image :src="fbTransparent" />
            <h3>Transparent Toolbar</h3>
          </div>
          <spacer horizontal="30px" />
          <div>
            <page-image :src="fbPull" />
            <h3>Pull-to-Refresh</h3>
          </div>
        </flex-horizontal>
      </page-paragraph>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'Facebook',
  components: components,
  data () {
    return {
      fbCover: require('../assets/fb-cover.png'),
      fbVoice: require('../assets/fb-voice.png'),
      fbAloha: require('../assets/fb-aloha.png'),
      fbSets: require('../assets/fb-sets.png'),
      fbGif: require('../assets/fb-gif.png'),
      fbQr: [
        require('../assets/fb-qr-1.png'),
        require('../assets/fb-qr-2.png')
      ],
      fbStoryFilter: require('../assets/fb-story-filter.jpg'),
      fbFunFact: [
        require('../assets/fb-funfact-1.png'),
        require('../assets/fb-funfact-2.png')
      ],
      fbFund: [
        require('../assets/fb-fund-1.png'),
        require('../assets/fb-fund-2.png')
      ],
      fbDrawer: require('../assets/fb-more-drawer.png'),
      fbMovies: require('../assets/fb-movies.png'),
      fbTransparent: require('../assets/fb-transparent.png'),
      fbPull: require('../assets/fb-pull.gif'),
      fbBonfire1: require('../assets/fb-bonfire-1.png'),
      fbBonfire2: require('../assets/fb-bonfire-2.png'),
      collabItems: [
        { name: 'Jane Manchun Wong', url: 'https://jmw.fyi/' },
        { name: 'Philippe Harewood', url: 'https://philippeharewood.com/' },
        { name: 'Blake Tsuzaki' }
      ]
    }
  },
  mounted () {
    global.setToolbarSubtext('Facebook')
  }
}
</script>
