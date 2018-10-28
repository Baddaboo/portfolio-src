<template>
  <page-container>
    <page-hero :image-src="classicKitCover" />
    <page-section>
      <page-header title="ClassicKit" />
      <page-double-section :proportion="60">
        <p slot="left">
          ClassicKit is an exploration into applying 90's-era design and
          principles into a modern platform using primitive components
          (i.e. buttons, sliders, text input). This is a drop-in
          framework that can be used with any iOS project! The verbose
          information architecture and low-contrast styling presents a
          contrast to current platforms' simplistic, yet expressive,
          high-definition design patterns.
          <spacer vertical="30px" />
        </p>
        <page-glance slot="right"
          tools="iOS, Core Animation, UIKit, Interface Builder, @IBDesignable and @IBInspectable Patterns"
          color="#73c5c9"
          :link="{
            url: 'https://github.com/Baddaboo/ClassicKit',
            text: 'Visit on GitHub'
          }"
          :additional="[
            { title: 'Type', content: 'Design Exploration' },
            { title: 'At a Glance', content: '2000+ stars on GitHub, reached #1 on Hacker News, and featured in tech blogs' }
          ]">
        </page-glance>
      </page-double-section>
    </page-section>
    <page-section>
      <page-sub-header title="Exploration" />
      <page-paragraph>
        Windows 95 represented a major shift in Microsoft's operating
        system strategy, and along with this shift came a plethora of
        new UI features and design patterns to match. These patterns can
        be seen in <i>The Windows Interface Guidelines</i> released for
        Windows 95, one of the first of its kind. Concepts like
        scrolling, we find commonplace now, were brand new to users then
        and had to be introduced with a carefully crafted and considered
        design:
      </page-paragraph>
      <page-image :src="scrollExample" type="half"/>
    </page-section>
    <page-section>
      <page-sub-header title="Nostalgic Design" />
      <page-paragraph>
        Shortly after ClassicKit was released, it garnered a tremendous
        amount of attention on the Internet, from Millenials to
        old-school Windows fans. I was both elated and surprised that
        the response was not only positive, but outright enthusiastic.
        The project itself reached the top of
        <a class="link" href="https://news.ycombinator.com/item?id=17080056">Hacker News</a>
        and has so far garnered over 2,000 stars on
        <a class="link" href="https://github.com/Baddaboo/ClassicKit">GitHub</a>.
        I've even gotten requests from fellow developers to use
        ClassicKit in their own apps.
      </page-paragraph>
      <spacer vertical="40px" />
      <page-paragraph>
        All this constitutes a field I've started to coin, <i>Nostalgic
        Design</i>. As my friend, a fellow HCDE-er
        <a href="http://bengalassi.com" class="link">Ben Galassi</a>
        put it,
        <strong>"Nostalgia is a reimagining of the past in a brighter
        light. Actually reliving things leaves much to be desired, you
        want to recreate the feeling you had using it rather than what
        it was actually like."</strong> Hilariously enough, the
        <a class="link" href="https://github.com/Baddaboo/ClassicKit/issues/1">most requested</a>
        feature on GitHub was a blue screen of death. The BSOD was an
        intensely painful part of using Windows, yet fans have found joy
        in this catastrophic experience:
      </page-paragraph>
      <page-image :src="bsod" type="half" :responsive="false"/>
    </page-section>
    <page-section>
      <page-sub-header title="Where to, now?" />
      <page-paragraph>
        I'm still pursuing this project in my free time to explore how
        other experiences can be re-imagined using these patterns. I'm
        ever-fascinated by the verbosity of the Windows design language
        that introduced most people to the world of computing while
        providing affordances to let people get stuff done. My latest
        project involves taking on Spotify. I'm focusing on the complex
        onboarding process of logging into the app to presenting albums
        and songs using the metaphors of folders and files,
        respectively, as the original Windows Media Player did:
      </page-paragraph>
      <page-images :srcs="[spotifySetup, spotifyFiles]" type="half"/>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'ClassicKit',
  components: components,
  data () {
    return {
      bsod: require('../assets/bsod.png'),
      classicKitCover: require('../assets/classickit-cover.png'),
      scrollExample: require('../assets/scroll-example.png'),
      spotifySetup: require('../assets/spotify-setup.png'),
      spotifyFiles: require('../assets/spotify-files.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('ClassicKit')
  }
}
</script>
