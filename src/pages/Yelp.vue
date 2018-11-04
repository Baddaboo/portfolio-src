<template>
  <page-container>
    <page-hero :image-src="yelpCover" />
    <page-section>
      <page-header title="Reader Experience Mobile" />
      <page-double-section>
        <p slot="left">
          At Yelp, I worked on an <strong>interdisciplinary team of designers,
          engineers, and product managers</strong> known as Reader Experience
          (ReaderX). Together, we designed and shipped new features into the
          Yelp iPhone & iPad app. My main work was on <strong>Yelp
          Collections</strong> (previously Bookmark Collections) and new
          components we introduced into the Yelp Styleguide.
          <spacer vertical="20px" />
          Yelp Collections was also featured in
          <a
            href="https://www.reallygoodux.io/blog/yelps-new-bookmark-collections-feature"
            class="link">
            Really Good UX
          </a> as an example of, well, really good UX! 🎉
          <spacer vertical="30px" />
        </p>
        <page-glance
          slot="right"
          color="#ffb4bc"
          role="Software Engineering Intern"
          tools="iOS (Swift & Objective-C), Core Animation, CocoaPods, TestFlight"
          process="Development, Component Design, Design Discussions, Usability Testing, A/B Testing, Continuous Deployment"
          :additional="[
            { title: 'Team', content: 'ReaderX Mobile' }
          ]" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-sub-header title="Design Process" />
      <page-image :src="yelpProcess" />
    </page-section>
    <page-section>
      <page-sub-header title="Background" />
      <page-paragraph>
        Yelp Collections is a new way to organize Yelp bookmarks and share them
        with family and friends. The product arose out of the old Bookmarks
        feature that was used and loved by many users. And so our challenge was
        to bridge the past with the future. <strong>We aimed to build upon a
        feature that die-hard Yelp fans relied on, while creating new ways to
        interact and engage for everyone.</strong>
        <spacer vertical="20px" />
        You can read more about our rollouts for these features
        <a
          href="https://www.yelpblog.com/2016/10/bookmark-collections-new-back-pocket-resource"
          class="link">
          here
        </a>
        and
        <a
          href="https://www.yelpblog.com/2016/11/bookmark-sharing"
          class="link">
          here!
        </a>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Product" />
      <page-paragraph>
        <page-double-section>
          <page-image slot="left" :src="yelpDemo" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Bookmark Collections" />
            Collections was the core feature we introduced, and along with it,
            a new interaction pattern for the app. While exploring a new town or
            city, bookmarks were once <i>breadcrumbs</i> users would collect
            along the way. <strong>Now, collections gave them a way to organize
            these breadcrumbs.</strong>
          </div>
        </page-double-section>
        <page-double-section>
          <page-image slot="left" :src="yelpSharing" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Shared Collections" />
            Through testing, we discovered that these collections were more
            baskets of breadcrumbs. <strong>Users were building <i>stories</i>.
            </strong> A Seattleite visiting San Francisco, for example, might
            build a collection for the coffee shops he visited to tell his
            friends back home (literally me ☕️). Noticing this trend, we
            extended the project to build a sharing feature into collections.
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Components" />
      <page-paragraph>
        While bringing these features to life, we had to <strong>invent new
        design patterns along the way.</strong> These elements were later added
        to the <a href="https://www.yelp.com/styleguide" class="link">Yelp
        Styleguide.</a> Although their look and feel have been tweaked, these
        components are still used today across the entire app. Some of these
        elements include:
        <page-double-section>
          <page-image slot="left" :src="yelpToast" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Actionable Toasts" />
            To introduce users to collections, we looked for an entry point that
            presented itself in-the-moment <strong>without derailing the user
            from their experience.</strong> And so we found a clever opportunity
            to pop an actionable toast right when the user bookmarks a business.
            We rewrote the app's toast implementation to present dynamic,
            actionable alerts.
          </div>
        </page-double-section>
        <page-double-section>
          <page-image slot="left" :src="yelpModal" :shadow="true" />
          <div slot="right">
            <page-sub-sub-header title="Modals" />
            We also wanted the collections experience to feel seemlessly baked
            into the Yelp experience. We experimented with ways to
            <strong>prioritize context and distill the amount of interface we
            need to show the user.</strong> We arrived at modals: views that
            present themselves over the current page, display typically only one
            action or bit of information, and can be swiped away.
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Etc." />
      <page-paragraph>
        While at Yelp, I made so many friends along the way and we stuck with
        each other through thick and thin. Although we've all gone in different
        directions, I can honestly say I would not be where I am today without
        them. (We're also <i>really good</i> at taking <i>bad</i> pictures)
        <br />
        <page-image :src="yelpDab" />
      </page-paragraph>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'Tiger',
  components: components,
  data () {
    return {
      yelpCover: require('../assets/yelp-cover.png'),
      yelpProcess: require('../assets/yelp-process.png'),
      yelpDemo: require('../assets/yelp-demo.gif'),
      yelpSharing: require('../assets/yelp-sharing.gif'),
      yelpToast: require('../assets/yelp-toast.png'),
      yelpModal: require('../assets/yelp-modal.png'),
      yelpDab: require('../assets/yelp-dab.jpg')
    }
  },
  mounted () {
    global.setToolbarSubtext('Yelp')
  }
}
</script>
