<template>
  <page-container>
    <page-hero :image-src="easyCover" />
    <page-section>
      <page-header title="EasyLayout" />
      <page-double-section :proportion="60">
        <p slot="left">
          EasyLayout is a design layout framework built to make it faster and
          easier to create programmatic, dynamic layouts in Swift and
          Objective-C. It is currently used in the Tiger mobile app to
          perform complex visualizations and layout animations.
          <spacer vertical="30px" />
          The core syntax utilizes advanced Swift design patterns and aims to
          make the development experience simpler and more delightful.
          <spacer vertical="30px" />
        </p>
        <page-glance slot="right"
          tools="iOS, macOS, AutoLayout, UIKit, Swift & Objective-C"
          color="#ffc4dc"
          :additional="[
            { title: 'Type', content: 'Design Layout Framework' },
            { title: 'At a Glance', content: 'Cut down the size and complexity of Tiger source files while reducing crashes and layout mistakes.' }
          ]"
          :link="{
            url: 'https://github.com/Baddaboo/EasyLayout',
            text: 'Visit on GitHub'
          }"></page-glance>
      </page-double-section>
    </page-section>
    <page-section>
      <page-sub-header title="The Old Way" />
      <page-paragraph>
        AutoLayout is a great system for creating responsive layouts in iOS,but
        implementing it in an app can be frustrating and limited.
        <spacer vertical="30px" />
        <page-image :src="easyXcode" />
        One way to use AutoLayout was by using Interface
        Builder (now, more commonly referred to as Storyboards).
        Although Interface Builder made it easy to define layout
        constraints and their relationships, the layout would be
        static in that constraints could not be changed on-the-fly
        very easily and could not be animated.
      </page-paragraph>
      <spacer vertical="30px" />
      <page-paragraph>
        <page-double-section>
          <div slot="left">
            <page-image :src="easyOldCode" />
            <p>
              And so most developers used the AutoLayout API to create
              constraints in code and apply them to views. However, the API was
              (and still is) very complicated. Creating a new constraint
              can take as many as 7 lines of code, and typically 4 constraints
              are needed per view. Add this to the boilerplate code a developer
              would also have to add to disable the autoresizing mask
              constraints and activate the constraints for UIKit to recognize
              them. Then to animate, we'd have to track down which layout is
              active to disable it while the system redraws...
            </p>
          </div>
          <page-image slot="right" :src="easyOldCodeAll" />
        </page-double-section>
        <spacer vertical="30px" />
        <color-container color="#ffc4dc">
          <h3>This was not a great experience, even for seasoned developers.</h3>
        </color-container>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="The New Way" />
      <page-paragraph>
        <page-image :src="easyNew" type="half" />
        EasyLayout is a domain-specific language for Swift and compiles into a
        simple method call for Objective-C. Its aim is to cut what used to be 7
        lines of code for a constraint into one human-readable statement.
        <page-list :items="[
          'It\'s declarative which means the developer calls directly upon the view they are affecting.',
          'It\'s type-safe, so that incompatible constraints cannot be paired together and crash the app at runtime.',
          'Best of all, animating a constraint change is just as simple as creating one.'
        ]">
        </page-list>
        <page-double-section>
          <page-image slot="left" :src="easyButton" type="half" :responsive="false"/>
          <page-image slot="right" :src="easyiOS" type="half" :responsive="false"/>
        </page-double-section>
        Simply call the replace function within an animation block, and the
        layout will animate using the standard UIView animation routine. You can
        do things like animate the height of a button (literally ☝️). Animating
        constraints was almost unheard of in the world of iOS and macOS
        development, but is now incredibly simple.
        <spacer vertical="30px" />
        There's no trickery going on here - in fact, since each statement
        returns a NSLayoutConstraint object, it is even more transparent than
        <a href="https://github.com/facebook/yoga/tree/master/YogaKit" class="link">
          other layout frameworks
        </a> out there. And, because it interfaces with the standard UIKit API,
        it is just as fast and robust as using the official platform methods.
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Where to, now?" />
      <page-paragraph>
        I currently use EasyLayout to quickly build and prototype apps that
        need complex layouts. The Tiger mobile app will be the first production
        app (that I know of) that will ship with this framework. I continue to
        develop on it, adding features and ironing out the bugs. My long-term
        goal is to create a system of high-level layouts and techniques so that
        <strong>defining a dynamic layout will be as simple as putting pen to
        paper. </strong>
      </page-paragraph>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'EasyLayout',
  components: components,
  data () {
    return {
      easyCover: require('../assets/easylayout-cover.png'),
      easyXcode: require('../assets/easylayout-storyboard.png'),
      easyOldCode: require('../assets/easylayout-old.png'),
      easyOldCodeAll: require('../assets/easylayout-old-code.png'),
      easyNew: require('../assets/easylayout-new.png'),
      easyButton: require('../assets/easybutton.gif'),
      easyiOS: require('../assets/easybutton-ios.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('EasyLayout')
  }
}
</script>
<style scoped>
h3 {
  margin: 0;
}
</style>
