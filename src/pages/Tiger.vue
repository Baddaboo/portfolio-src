<template>
  <page-container>
    <page-hero :image-src="tigerCover" />
    <page-section>
      <page-header title="Tiger" />
      <page-double-section>
        <p slot="left">
          At Tiger, my role began as a front-end developer, but merged with
          design as I took on more projects within the team. At Tiger, we're
          hoping to change the way people connect with their friends and
          co-workers. I was fortunate enough to <strong>take the lead on a
          massive product reboot</strong> informed by a range of methods,
          including focus groups, participatory design, and usability testing.
          <spacer vertical="30px" />
        </p>
        <page-glance
          slot="right"
          color="#91ddff"
          role="Principal Front-end Engineer & Designer"
          tools="iOS (Swift & Objective-C), EasyLayout, Parse, TestFlight"
          process="Interviews, focus group, participatory design, personas, competitive analysis, prototyping, heuristics, usability testing, A/B testing"
          :link="{
            url: 'http://gettiger.com/',
            text: 'Early Release Info'
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
  name: 'Tiger',
  components: components,
  data () {
    return {
      tigerCover: require('../assets/tiger-cover.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('Tiger')
  }
}
</script>
