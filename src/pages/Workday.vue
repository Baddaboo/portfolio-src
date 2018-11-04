<template>
  <page-container>
    <page-hero :image-src="wdayCover" />
    <page-section>
      <page-header title="Workday" />
      <page-double-section>
        <p slot="left">
          At Workday I was part of a small, but fast-moving team, UX Mobile.
          The goal of my project was to work alongside a design intern, <a href="https://www.linkedin.com/in/tony-chan-206086115" class="link">
          Tony Chan</a> to create and implement a set of interactive animations
          for the Workday Android app. However, I'm proud to say our work went
          <i>far deeper</i> than a couple of UI enhancements.
          <spacer vertical="30px" />
          Our work was twofold:
          <page-list :items="[
            'On the engineering side, we introduced a modern, testable animation architecture to the Workday app.',
            'On the design side, we helped to foster a common dialogue around UI animations for designers and engineers to collaborate better.'
          ]" />
          <spacer vertical="30px" />
        </p>
        <page-glance slot="right"
          color="#bae1ff"
          role="Software Engineering Intern"
          tools="Android (Java & Kotlin), Dagger2, RxJava, Mockito, ButterKnife, Vizzy"
          :additional="[
            { title: 'Team', content: 'UX Mobile (UI Platform)' },
            { title: 'At a Glance', content: 'Animations, Frameworks & Architecture, Design Discussions, Automated Testing' }
          ]" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-paragraph>
        <spacer vertical="30px" />
        <strong>
          Unfortunately, this feature is not yet available to general users so I
          can only speak to the project at a high level.
        </strong>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="What goes into an animation?" />
      <page-paragraph>
        From a technical standpoint, an animation is simply the transition
        between two values. I like to distinguish between geometric, property,
        and path animations. Each of these types has a start point, an end
        point, and some interpolation between them.
        <spacer vertical="30px" />
        <page-sub-sub-header title="Geometric Animations" />
        Geometric animations are simple transitions that affect the basic
        dimensions of a view. These are the simplest, and most commonly-used
        animation type in web and mobile interfaces that can define:
        <br />
        <page-image :src="wdayGeometric" />
        <page-double-section>
          <page-image slot="left" :src="wdayModal" />
          <p slot="right">
            A typical modal transition, for example, is usually the
            combination of a translation animation and a scale animation. Add
            on a timing function, and you can get something like this.
          </p>
        </page-double-section>
        <page-sub-sub-header title="Property Animations" />
        Property animations define specific attributes of a view relative to
        other views or the whole screen. Simple examples include color and
        opacity, but some design systems (such as <a href="https://material.io/design/" class="link">Material Design</a>)
        also define properties such as shadows, elevation, and weight. These
        attributes may not be visually tied to the view itself, but provide
        a basis for how views interact with each other.
        <br />
        <page-image :src="wdayProperty" />
        <page-sub-sub-header title="Path Animations" />
        Path animations are the <i>most fun</i>. They involve mapping the points
        from one state to another to animate the actual shape. Some shapes have
        additional information that describes the curvature at each point, known
        as Bézier curves.
        <page-double-section :proportion="60">
          <page-image slot="right" :src="wdayPath" />
          <p slot="left">
            This transition, for example, animates the point-to-point difference
            between the arrow and the hamburger menu to create its transition.
            <spacer vertical="20px" />
            The challenge, here, is to ensure that both states have the same
            number of points and that the system knows which point in one state
            corresponds to the point in the other.
          </p>
        </page-double-section>
        <page-sub-sub-header title="Putting it all together" />
        <page-double-section :proportion="30">
          <page-image slot="left" :src="wdayProto1"/>
          <p slot="right">
            Layering all these animation types can create interesting
            visualizations, such as Google's Material spinner animation. In
            Workday, we've introduced a new animation architecture with
            animations like these peppered throughout the system.
            <spacer vertical="20px" />
            These animations serve more than glitz and personality. They help
            inform context and transition for the user. They're a way to
            <b>show</b> you've moved from point A to point B without
            deliberately <b>saying</b> you did.
          </p>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Testability" />
      <page-paragraph>
        One of the reasons engineering teams tend to avoid animations is that
        they are difficult to test and the consequences can be catastrophic.
        Say, you're animating the checkout button of a shopping cart, and the
        animation breaks so the button disappears. The button might be present
        in the layout, but the user will not be able to check out. <b>That's
        <i>really</i> bad.</b>
        <br />
        <page-image :src="wdayVizzy" type="half"/>
        Luckily at Workday, we use <a href="https://github.com/Workday/vizzy"
        class="link">Vizzy</a> to create visual automation tests. Since
        animations have a start state and an end state, we visually evaluate the
        whole interface before the animation has been commited and after it has
        completed. From here, we can identify when an animation has failed and
        in which context to quickly debug it. Its screenshotting feature also
        holds us accountable for visual changes made to the interface over time.
        Overall, although it may not have been designed with animations in mind,
        Vizzy proved to be <i>great</i> for this use case.
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Etc." />
      <page-paragraph>
        In addition to animations, I also played some key roles in refactoring
        the main pages of the Android app as well as raising issues with
        accessibility. I'm grateful to have had the opportunity to work with
        some of the smartest, funnest, people I know. Some of my intern friends
        and I even partnered up for a hackathon and did a kick-ass job as Team
        Mo'Billz:
        <br />
        <page-image :src="wdayMobillz" />
      </page-paragraph>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'Workday',
  components: components,
  data () {
    return {
      wdayCover: require('../assets/wday-cover.png'),
      wdayGeometric: require('../assets/wday-geometric.png'),
      wdayModal: require('../assets/wday-modal.gif'),
      wdayProperty: require('../assets/wday-property.png'),
      wdayPath: require('../assets/Arrow-norotate.gif'),
      wdayProto1: require('../assets/spinner.gif'),
      wdayVizzy: require('../assets/wday-vizzy.png'),
      wdayMobillz: require('../assets/mobillz.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('Workday')
  }
}
</script>
