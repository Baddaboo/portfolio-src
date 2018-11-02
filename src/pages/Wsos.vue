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
            connects industry mentors with students. This platform is currently
            live, launched as <a href="https://wsos-base.firebaseapp.com/#/" class="link">
               Skills that Shine
            </a> for students and mentors in the state of Washington.
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
          tools="Vue.js (HTML, CSS, & JavaScript), Bootstrap, ESLint, Webpack, Firebase, SendGrid"
          process="Interviews, personas, prototyping, participatory design, heuristics, usability testing, continuous deployment"
          :link="{
            url: 'https://www.waopportunityscholarship.org/',
            text: 'Visit the Program'
          }" />
      </page-double-section>
    </page-section>
    <page-sub-header title="Design Process" />
    <page-hero :image-src="wsosProcess" />
    <spacer vertical="30px" />
    <page-section>
      <page-paragraph>
        <page-sub-header title="Research" />
        We began this project by exploring WSOS's current operations and
        outreach with students. This started with contextual research into
        documentation and program structures. We then conducted interviews with
        staff to identify particular pain points and design opportunities. We
        came up with dozens of insights, but the main themes came down to:
        <spacer vertical="10px" />
        <page-double-section :proportion="20">
          <page-image slot="left" :src="wsosProcessRecruit" />
          <div slot="right">
            <strong>Most recruiting is organic</strong>
            <spacer vertical="10px" />
            WSOS mentors are volunteers donate their time to mentor students. As
            such, WSOS finds through personal connections and outreach programs.
            Recruiters often register mentors on-the-spot and maintain personal
            relationships with them.
          </div>
        </page-double-section>
        <page-double-section :proportion="20">
          <page-image slot="left" :src="wsosProcessIT" />
          <div slot="right">
            <strong>There are hard technology constraints</strong>
            <spacer vertical="10px" />
            As a nonprofit, WSOS itself runs on a lean budget and relies on
            technology partners to fill its gaps in IT and data management.
            This means that the program is able to operate with a minimal
            amount of IT staff.
          </div>
        </page-double-section>
        <page-double-section :proportion="20">
          <page-image slot="left" :src="wsosProcessPaper" />
          <div slot="right">
            <strong>Most tasks are still done by paper</strong>
            <spacer vertical="10px" />
            Having a small IT team means that most book-keeping is still done
            manually by staff. However, new technologies also pose security and
            privacy risks for users. In the past, WSOS has also been subject to
            cyber attacks.
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Ideation" />
        Using participatory design, we worked with WSOS staff to ideate on
        different ways we could optimize the program's current processes while
        addressing its challenges. We iterated continuously on mockups while
        going back to refine our research questions in the process.
        <page-double-section :proportion="30">
          <page-image slot="left" :src="wsosForm" />
          <div slot="right">
            <strong>Form Digitalization</strong>
            <spacer vertical="10px" />
            Our first version involved taking the traditional mentor signup
            forms and building an interface around them that would allow users
            to self-enter data into the system and build a profile. In this
            step, we were able to eliminate many fields that were not necessary
            while experiment with profile-building features such as selecting
            a profile image template.
          </div>
        </page-double-section>
        <page-double-section :proportion="30">
          <page-image slot="left" :src="wsosAdmin" />
          <div slot="right">
            <strong>Admin Data Management</strong>
            <spacer vertical="10px" />
            Since WSOS had limited IT resources, we needed to ensure that an
            administrator could perform data management tasks without directly
            dealing with the database or commandline functionality. And so, in
            addition to designing for the <i>student</i> and <i>mentor</i>
            personas, we also designed a specific interface for program
            administrators.
          </div>
        </page-double-section>
        <page-double-section :proportion="30">
          <page-image slot="left" :src="wsosMatch" />
          <div slot="right">
            <strong>Mentor-Mentee Matching</strong>
            <spacer vertical="10px" />
            Matching personalities and career interests of students and mentors
            was traditionally done by WSOS staff. However, since these profiles
            are now created and managed online, we expanded our problem space
            to explore how we could deepen the mentor-mentee relationship by
            allowing students to pick their own mentors.
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Iteration (Round 1)" />
        Once we created the first-pass mockups, we conducted studies with past
        WSOS mentors and mentees to gain feedback. Specifically, we wanted to
        test the new interaction that would allow students to select their
        mentors. This was previously uncharted territory for WSOS and opened
        questions over how students would choose a mentor, which attributes they
        look for, and how we could be fair to everyone. Some examples of our
        findings included:
        <ul>
          <li>
            Including a full name encouraged students to look up their mentors
            and could be <strong>unfair to mentors who lack an online presence
            or do not work at big-name companies</strong>.
          </li>
          <li>
            <strong>Language matters</strong>. Using expressions such as, "Let's
            get down to business" tested better than "Step 1". Not only was this
            more comfortable for users, but it made them noticeably more
            forgiving on parts of the interface that were incomplete or difficult
            to understand.
          </li>
          <li>
            Having template profile images added an extra flair for mentors
            that <strong>they enjoyed picking and students loved seeing</strong>
            without giving away too much. We would later add an assortment of
            six animal pictures to choose from.
          </li>
        </ul>
        <page-image :src="wsosAnimals" type="half"/>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Prototype" />
        The system was built using Vue.js and Bootstrap for the front-end,
        Firebase for the back-end, and SendGrid for email dispatch. These tools
        were chosen for their robustness and speed to build a fully-functioning
        system that could be iterated on quickly. Using the mockups we created
        and validated, we could quickly bring our concepts to life and get them
        in front of users.
        <spacer vertical="30px" />
        <h3>Student Dashboard</h3>
        <page-image :src="wsosProto" />
        <h3>Admin Dashboard (data hidden)</h3>
        <page-image :src="wsosProtoAdmin" />
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Testing" />
        In addition to its architectural stack, this system was built around a
        toolchain using ESLint and continuous deployment. This toolchain builds
        on typical good software engineering practices and <strong>allows us to
        build and deploy a new version of the WSOS service on-the-fly</strong>
        without disrupting the user experience. Each update runs through a suite
        of tests, and if the service breaks, the system instantly rolls back the
        update.
        <spacer vertical="20px" />
        This became especially important as we tested the layout and interface
        patterns for users. We could gather feedback both from surveys and from
        analytics to identify where users were getting stuck and deploy fresh
        variations without ever taking the service down for maintenance. The
        toolchain enabled us to use <strong>data-driven insights</strong> to
        further refine the experience.
      </page-paragraph>
      <page-image :src="wsosDeploy" />
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Iteration (Round 2)" />
        <page-double-section>
          <page-image slot="left" :src="wsosCodes" :shadow="true" />
          <p slot="right">
            The most valuable insight we got at this point was that manually
            entering email addresses to onboard mentors during a live recruiting
            event <strong>proved to be very cumbersome when used in real life.
            </strong> We were able to quickly develop a paste tool for mentor
            coordinators to take down email addresses using an Excel sheet or
            in a notes app on their smartphone and quickly send access codes to
            prospective mentors.
          </p>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-paragraph>
        <page-sub-header title="Launch" />
        After iterating on the system and incorporating feedback, we reached a
        point where we could graduate the system to launch. We worked with WSOS
        to <strong>coordinate a staged rollout</strong>. First we released the
        administrator interface to the mentor coordination team, then onboarding
        mentors, before finally opening the service to students.
        <spacer vertical="20px" />
        The service is currently live, and has launched under the name of
        Washington State Opportunity Scholarship
        <a href="https://wsos-base.firebaseapp.com/#/" class="link">
           Skills that Shine
        </a>
        Program! It has been used to match hundreds of students and mentors and
        facilitate communication from the WSOS team. We continue to incorporate
        feedback, while onboarding new users for the Fall 2018 season.
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
      wsosCover: require('../assets/wsos-cover.png'),
      wsosProcess: require('../assets/wsos-process.png'),
      wsosProcessRecruit: require('../assets/wsos-puzzle.png'),
      wsosProcessIT: require('../assets/wsos-pc.png'),
      wsosProcessPaper: require('../assets/wsos-clipboard.png'),
      wsosForm: require('../assets/wsos-signup.png'),
      wsosAdmin: require('../assets/wsos-admin.png'),
      wsosMatch: require('../assets/wsos-match.png'),
      wsosAnimals: require('../assets/wsos-animals.png'),
      wsosProto: require('../assets/wsos-proto.png'),
      wsosProtoAdmin: require('../assets/wsos-admin-proto.png'),
      wsosDeploy: require('../assets/wsos-deployment.png'),
      wsosCodes: require('../assets/wsos-codes.png')
    }
  },
  mounted () {
    global.setToolbarSubtext('Skills that Shine')
  }
}
</script>

<style scoped>
</style>
