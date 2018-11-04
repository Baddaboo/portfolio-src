<template>
  <page-container>
    <div class="header-container">
      <div class="header">
        <div class="profile-image-bevel">
          <img class="profile-image" :src="profileImage" />
        </div>
        <div class="header-commands">
          <h2>$ echo "Hello World"</h2>
          <h2>$ cat /var/log/aboutme</h2>
        </div>
      </div>
    </div>
    <page-section>
        <page-header
          title="Hello World"
          align="left" />
        <page-paragraph>
          I live at the intersection of design and engineering. My
          work has involved bringing the two minds together at
          companies including Yelp, Tiger, and Workday. I am
          currently based in Seattle, pursuing my Master's degree in
          <a href="https://www.hcde.washington.edu" class="link">
              Human Centered Design and Engineering
          </a> (expected graduation in Spring 2019). I also have a
          background in Computer Science & Electrical Engineering
          from <a href="https://www.scu.edu" class="link">Santa Clara University</a>.
          Lately, my focus has been on prototyping and researching
          emerging technologies that bridge our physical and digital
          worlds.
        </page-paragraph>
      </page-section>
      <page-section>
        <page-header title="What I believe in" />
        <page-paragraph>
          <page-sub-header
            title="👨🏻‍💻☕️ Solving design problems with deep engineering" align="left" />
          ...and solving engineering problems with great
          design. The best solutions often come from
          approaching a problem at multiple angles. I like
          to get as many stakeholders as I can into one room,
          speaking a common language.
        </page-paragraph>
      </page-section>
      <page-section>
        <page-paragraph>
          <page-sub-header
            title="🔮🙅🏻‍ ‍Replace assumptions with prototypes"
            align="left" />
          I love dealing with the <i>unknown</i>, whether
          it's a new technology or problem space. However,
          as much I like to think I know how a product or
          feature might work out in the wild, it's impossible
          to account for every user and every use case. I
          believe in prototyping fast and prototyping often
          to build empathy, identify pain points, and
          explore problem spaces.
        </page-paragraph>
      </page-section>
      <page-section>
        <page-paragraph>
          <page-sub-header
            title="📝✨ The best code is the code you don't have to write" align="left" />
          As technologists, we're often drawn to
          technological solutions. I believe in taking a
          step back and re-evaluating the solution at
          every step, working with stakeholders to
          advocate for <i>what's right</i> instead of
          what's most technically impressive or
          over-engineered.
        </page-paragraph>
      </page-section>
    </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'About',
  components: components,
  data () {
    return {
      profileImage: require('../assets/profile.jpg')
    }
  },
  mounted () {
    global.setToolbarSubtext('About')
  }
}
</script>

<style scoped>
.header-commands {
    margin-left: 20px;
}
.profile-image-bevel {
    height: 100%;
    margin: 20px;
    padding: 5% 5% 20% 5%;
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.3);
}
.profile-image {
    width: 100%;
}
.header-container {
    width: 100%;
    display: block;
}
.header {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}
</style>
