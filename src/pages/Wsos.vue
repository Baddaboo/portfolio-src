<template>
  <page-container>
    <page-hero :image-src="wsosCover" />
    <page-section>
      <page-header title="Washington State Opportunity Scholarship" />
      <page-double-section>
        <div slot="left">
          <p>
            The
            <a href="https://www.waopportunityscholarship.org/" class="link">
              Washington State Opportunity Scholarship
            </a>
            is a first-of-its-kind organization to help students from low and
            middle-income households succeed in STEM fields, in college and
            beyond. Our team worked with WSOS to develop a new platform that
            connects industry mentors with students.
          </p>
          <spacer vertical="20px" />
          <h2>Team</h2>
          <spacer vertical="10px" />
          <team-item :items="[
            {
              name: 'Jason Runyuan Chen',
              url: 'https://jasonchenux.com/',
              role: 'Design & Research'
            },
            {
              name: 'Blake Tsuzaki',
              role: 'Design & Engineering'
            }
          ]" />
          <spacer vertical="30px" />
        </div>
        <page-glance
          slot="right"
          color="#fee79b"
          role="Engineer & Designer"
          tools="iOS, Swift & Objective-C, EasyLayout, Parse, TestFlight"
          process="Interviews, focus group, participatory design, personas, competitive analysis, prototyping, heuristics, usability testing, A/B testing"
          :link="{
            url: 'https://www.waopportunityscholarship.org/',
            text: 'Visit the Program'
          }" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="My Work" />
        Our team touched each part of the product, from rewriting core
        technology frameworks to designing new interface patterns. Although I
        cannot speak to any specifics about the product itself, I was able to
        graduate a number of projects to Open Source, including:
        <ul>
          <li>
            <a href="https://github.com/Baddaboo/BTCardView" class="link">BTCardView</a>
          </li>
          <li>
            <a href="https://github.com/Baddaboo/BTMaximizableView" class="link">BTMaximizableView</a>
          </li>
          <li>
            <a href="https://github.com/Baddaboo/BTStatusBar" class="link">BTStatusBar</a>
          </li>
          <li>
            <a href="https://github.com/Baddaboo/EasyLayout" class="link">EasyLayout</a>
          </li>
        </ul>
      </page-paragraph>
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'WSOS',
  components: components,
  data () {
    return {
      wsosCover: require('../assets/wsos-cover.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('Skills that Shine')
  }
}
</script>

<style scoped>
</style>
