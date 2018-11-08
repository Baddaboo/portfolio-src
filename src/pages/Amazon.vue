<template>
  <page-container>
    <page-image type="half" :src="amazonCover" :responsive="false" />
    <page-header title="Global Security Academy" />
    <page-section>
      <page-double-section>
        <div slot="left">
          <p>
            For our Usability Studies class, my team and I partnered with
            <strong>Amazon Global Security Operations</strong> to assess their
            Global Security Academy portal. This portal is the e-learning
            handbook for <strong>over 8,000 employees</strong> that work in
            Amazon warehouses and facilities across the world.
          </p>
          <spacer vertical="20px" />
          <h2>Team</h2>
          <spacer vertical="10px" />
          <team-item :items="teamItems" />
          <spacer vertical="30px" />
        </div>
        <page-glance
          slot="right"
          color="#ffd479"
          role="Usability Researcher"
          process="Interviews, Exploratory Research, Contextual Inquiry, Surveys, Sentiment Analysis, Coordinated Exercises"
          tools="Amazon Chime, GSA Portal" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-sub-header title="Research Question"/>
      <page-paragraph>
        <page-sub-sub-header title="How well does the GSA portal support the employees who use it on a daily basis to make decisions?" />
        <page-list :items="[
          'Where is the GSA portal commonly used, and who uses it?',
          'How well does the GSA portal keep employees up-to-date and support their decisions?',
          'How can these processes be optimized to better serve employees?'
        ]" />
        We used a mix of methods to approach our research questions from many
        different angles. We were also careful to <strong>separate participants'
        words from actions</strong> to gain the most accurate insight we could.
        Given the scale and organizational realities of the organization, we
        primarily focused on Amazon distribution centers in the United States.
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Methodology (Highlights)"/>
      <page-paragraph>
        <page-sub-sub-header title="Surveys" />
        We used surveys to conduct a large-scale study that <strong>gained
        general sentiments and contexts</strong> around the portal. Depending on
        when the employee was onboarded, they may have been introduced to the
        portal during orientation or while on the job. This survey was sent
        around the organization and <strong>garnered 150+</strong> responses.
        We were then able to use statistical models and sentiment analysis to
        inform the direction of our study.
      </page-paragraph>
      <spacer vertical="30px" />
      <page-paragraph>
        <page-sub-sub-header
          title="Semi-Structured Interviews + Usability Tests" />
        We then conducted semi-structured interviews to gain an in-depth
        perspective. We were particularly interested in the <strong>organic
        use-cases</strong> different employees created for the portal at their
        respective distribution center. Nearly all these conversations allowed
        employees to <strong>tell their own story</strong> about Amazon and their
        relationship with GSO.
        <spacer vertical="20px" />
        The interviews were supplemented by a usability study that allowed us to
        see exactly <i>how</i> participants use the portal on a daily basis. We
        used scenarios to <strong>simulate a set of processes or decisions the
        employee would be trained for</strong>, including an urgent,
        time-sensitive task, a non-urgent, time-flexible task, among others. We
        measured various attributes, including <strong>time to complete the
        tasks, think-aloud exercises, and others.</strong> These tests
        contextualized many of these participants' words into observable actions
        for us.
      </page-paragraph>
      <spacer vertical="30px" />
      <page-paragraph>
        <page-sub-sub-header title="Site Visit" />
        We were fortunate enough to visit a fulfillment center in Kent, WA and
        observe the center's processes and communications. We interviewed
        employees in <strong>various positions, from Loss-Prevention Specialists
        to even a Robotics Engineer.</strong> These observations built on our
        usability tests, putting the portal to use in-the-wild, in mixed
        settings. Some parts of the warehouse even presented challenges, such as
        lack of wireless internet connection.
      </page-paragraph>
      <spacer vertical="30px" />
      <page-paragraph>
        <color-container color="#ffd479">
          <strong>
            Due to the nature of our study, I am not able to share specific
            details about the portal, itself and some of our findings.
          </strong>
        </color-container>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Key Findings" />
        <page-sub-sub-header title="Navigation did not match users' expectations" />
        The <strong>scattered information architecture</strong> and redundancy
        meant that some pieces of information was difficult to find. Although
        many participants did find the correct information, some were
        <strong>unsure if it was the right information.</strong> Additionally,
        the <strong>extra time taken</strong> to scan the site could impact the
        situation at hand.
        <spacer vertical="20px" />
        <page-sub-sub-header title="Technical Limitations Got in the Way" />
        The GSA portal lives in a giant <strong>ecosystem of Amazon training
        materials</strong> and is not necessarily indexed by internal search
        engines. Additionally, most users access the site in a context within
        a <strong>web frame that adds its own UI overlays.</strong> Some of
        these frames, for example, contain a search bar that searches <i>all</i>
        of Amazon's training materials, not only those of GSA.
        <spacer vertical="20px" />
        <page-sub-sub-header title="Users Love the GSA Portal ❤️" />
        Most articles in GSA are written <strong>by Amazon employees</strong> in
        their respective distribution centers or headquarters. As such, they
        often use <strong>lingo and concepts</strong> their fellow Amazonians
        readily recognize. This sense of organic content and shared language
        drives <strong>trust and collectivism</strong> for employees.
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Etc." />
        We had a great time working with GSO and our project sponsors who made
        all this possible! We're especially grateful to Alison Koen and Matt
        Dawson, who took time out of their day to coordinate our surveys and
        visits.
        <spacer vertical="20px" />
      </page-paragraph>
      <page-image :src="amazonTeam" />
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'Amazon',
  components: components,
  data () {
    return {
      amazonCover: require('../assets/amazon-cover.png'),
      amazonTeam: require('../assets/amazon-team.jpg'),
      teamItems: [
        { name: 'Mike Harwell', url: 'http://mike-harwell.com' },
        { name: 'Marianne Aubin Le Quéré' },
        { name: 'Blake Tsuzaki' }
      ]
    }
  },
  mounted () {
    global.setToolbarSubtext('Amazon')
  }
}
</script>
