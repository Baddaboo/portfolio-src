<template>
  <page-container>
    <page-hero :image-src="prahviCover" />
    <page-section>
      <page-header title="PRAHVI" />
      <page-double-section>
        <div slot="left">
          <p>
            PRAHVI stands for "Portable Reading Assistance Headset for the
            Visually Impaired" and was a wearable device to help students
            navigate around visual contexts, particularly when encountered with
            visual media. This project began as a Senior Thesis project at
            <a href="https://scu.edu/" class="link">Santa Clara University</a>
            in collaboration with the SCU's Office of Disabilities Resources.
          </p>
          <spacer vertical="20px" />
          <h2>Team</h2>
          <spacer vertical="10px" />
          <TeamItem :items="teamItems" />
          <spacer vertical="30px" />
        </div>
        <page-glance slot="right" color="#ffd479"
          role="Hardware design + protocols, product prototyping, voice + visual
          user interface, and user testing"
          process="Interviews, empathy exercises, personas, competitive analysis,
          prototyping, heuristics, and user testing"
          tools="Raspberry Pi, iOS, Python, C++, PeerTalk, usbmuxd, TensorFlow,
          Tesseract, OpenCV" />
      </page-double-section>
    </page-section>
    <page-section>
      <page-sub-header title="Design Process"/>
      <page-image :src="prahviProcess" type="full"/>
    </page-section>
    <page-section>
      <page-sub-header title="Research" />
      <page-paragraph>
        To kick off our project, we started by identifying and researching
        challenges for individuals with visual impairment. We conducted
        interviews with <strong>Ignacia Villavelazquez-Hill</strong>, director
        of the Disabilities resource office. We also had our team go through a
        week-long <strong>empathy exercise</strong> in which we used VoiceOver
        on our phones to gain a sense of the current tools available to
        individuals. Finally, we conducted a literature review of current
        research and a <strong>competitive analysis.</strong>
      </page-paragraph>
      <spacer vertical="20px" />
      <page-paragraph>
        * Unfortunately, due to the nature of our study, the Disabilities Office
        was unable to let us interview actual students at SCU.
      </page-paragraph>
      <page-image :src="prahviFindigs" type="full"/>
      <page-paragraph>
        Our findings helped us informed a set of heuristics we could design
        around and test through the course of development:
        <page-list :items="[
          'The device should be low-cost',
          'The device should be lightweight and unobtrusive for use in public.',
          'The device should last through a reasonable full day of use.',
          'The device should be maintainable and extensible for long-term use.',
          'The device should interact with the user\'s environment without overt intervention.',
          'The device should have a short response time, as to be used in-the-moment.',
          'The device should have a relatively high standard for accuracy, but also have the ability to gracefully recover from mistakes.'
        ]" />
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Ideation + M1 Device" />
      <page-paragraph>
        Over the next few weeks, we set out to ideate on different devices we
        could build. Using <strong>affinity mapping</strong>, we coalesced
        around a few promising form factors including concepts that could be
        worn as a necklace, around the wrist like a smartwatch, and mounted to
        glasses for our first milestone devices.
        <page-double-section :proportion="40">
          <div slot="left">
            <page-image :src="prahviRough" type="full" />
          </div>
          <div slot="right">
            <p>
              We then developed physical mockups to evaluate their ergonomics
              and viability, such as the 3D-printed model shown here (please
              excuse the bed-head 😅). As another empathy exercise, we also wore
              these prototypes around campus to see how those around us would
              react.
            </p>
          </div>
        </page-double-section>
        <page-double-section :proportion="60">
          <div slot="left">
            <p>
              Meanwhile, on the software side, it became clear from our ideation
              that in order to keep costs low, we had to defer as much of the
              processing and user interface to a smartphone. Given that most
              students with visual impairment already own a smartphone, this
              was deemed as a sound design decision.
            </p>
            <spacer vertical="30px" />
            <p>
              We tested a standard <strong>Raspberry Pi camera</strong> attached
              to a tester at eye-level to observe how the ergonomics of how such
              a device could intercept with the position of the camera to get
              the optimal vantage point. We could also use the we captured to
              start training our OpenCV model to recognize a document context.
            </p>
            <spacer vertical="30px" />
            <p>
              This screenshot is taken from the
              <a href="http://fotosyn.com/berrycam/" class="link">BerryCam</a>
              app used to simulate the smartphone interaction.
            </p>
          </div>
          <div slot="right">
            <page-image :src="prahviBerrycam" type="full" />
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Prototype + M2 Device" />
      <page-paragraph>
        For our second milestone, we got to work building a functional prototype
        that incorporated all three aspects of our project: Computer Vision,
        Text Processing, and Hardware & Voice User Interfaces. To expedite
        development, we had been developing the three parts in parallel.
      </page-paragraph>
      <spacer vertical="30px" />
      <page-paragraph>
        <h3>Computer Vision</h3>
        In short, the computer vision routine used <strong>OpenCV</strong> to
        recognize the bounding corners of a document, poster, or other medium.
        After ranking the image for blurriness, familiarity, etc., the image is
        passed to <strong>Tesseract</strong>, which extracts text line-by-line.
      </page-paragraph>
      <page-image :src="prahviOcr" type="full" />
      <page-paragraph>
        <h3>Text Processing</h3>
        Depending on the mode the system is in, we apply different text
        processing techniques. We used a model that was trained using a corpus
        of articles gathered from the <strong>New York Times</strong> and is
        publicly available.
        <page-double-section :proportion="40">
          <page-image slot="left" :src="prahviVui" type="full"/>
          <div slot="right">
            <page-list :items="[
              'For advertisement contexts, such as posters and billboards, specific information markers (date, title, etc.) are lifted and read to the user.',
              'For informational contexts, TFIDF is applied to summarize the text and read the summary to the user rather than the whole document.',
              'For reading contexts, TFIDF is also applied, but to identify anomalies from the OCR process and guide the user to turn to the next page.'
            ]" />
          </div>
        </page-double-section>
      </page-paragraph>
      <page-paragraph>
        <h3>Hardware & Voice User Interfaces</h3>
        Tying this all together was the hardware and voice user interfaces.
        Having settled on the glasses-mounted form-factor, the enclosure of the
        device was an iteration of the ideation prototype with a mount for the
        Raspberry Pi Camera. We <strong>intentionally designed the device to
        plug into the smartphone using a cable.</strong> This was two-fold: our
        research and heuristics showed that pairing wireless devices <i>and</i>
        managing and charging the battery in this device would pose fatal
        challenges for accessibility.
        <spacer vertical="30px" />
        The voice user interface was manually run from a laptop using a script
        that called the system speech synthesis routine. At this point, we were
        able to run each individual part of the device manually with a tester.
        <br />
        <page-image :src="prahviDevice" />
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Testing + M3 Device" />
      <page-paragraph>
        By the time we reached our third milestone, testing had shown that our
        system was mostly complete - but there was something missing. We found
        through testing and our own heuristics that <strong>users would often
        need to go rewind in the voice interface to catch something they missed
        or fast-forward to skip parts that were not relevant.</strong> Since the
        device already requires a smartphone for processing, we added a touch
        interface for it as well.
        <page-double-section :proportion="30">
          <page-image slot="left" :src="prahviScreen" type="full" />
          <p slot="right">
            The interface, affectionately called <strong>SpeedReader</strong> is
            dominated by a large gesture area (orange) along with a readout of
            the current text above it for users with limited vision to follow
            along.
          </p>
        </page-double-section>
        <page-double-section>
          <div slot="left">
            <page-image :src="prahviPlay" />
            SpeedReader displays the voice interface output and highlights the
            current word the headset is dictating to indicate where the user is
            in the passage.
          </div>
          <div slot="right">
            <page-image :src="prahviScrub" />
            At any point, the user can swipe on the gesture area to rewind or
            fast-forward the readout. Devices that support 3D Touch will even
            subtly vibrate on each word.
          </div>
        </page-double-section>
      </page-paragraph>
    </page-section>
    <page-section>
      <page-sub-header title="Evaluation + Iteration" />
      <page-paragraph>
        With the puzzle finally complete, we continued to test and refine the
        system. Although we were unable to test with actual students with
        visual impairment, we ran tests amongst ourselves and participants we
        recruited. Additional testing also improved the accuracy of the OpenCV
        models.
        <page-double-section :proportion="30">
          <page-image slot="left" :src="prahviAlicia" />
          <p slot="right">
            People responded fairly positively to the technology and the
            interface in general. This was likely helped by the fact that
            documents, when recognized correctly, achieved accuracy rates as
            high as 95% in some cases. The use of alternative senses, sound and
            haptics, were seen as helpful and clever ways to interact.
            <spacer vertical="30px" />
            As for points of improvement, we fell short on our goal of
            miniaturizing the device into a form factor that would not stand out
            in public. The Raspberry Pi Zero was smallest development board that
            provided the hardware specifications we needed. Additionally, the
            device was only tested in indoor environments and the white-balance
            algorithms failed constantly when used outside, in sunny California.
          </p>
        </page-double-section>
      </page-paragraph>
      <page-image :src="prahviHand" />
    </page-section>
  </page-container>
</template>

<script>
import { global } from '../main.js'
import { components } from './PageComponents.js'

export default {
  name: 'Prahvi',
  components: components,
  data () {
    return {
      prahviCover: require('../assets/prahvi-cover.png'),
      prahviDevice: require('../assets/prahvi-headset.png'),
      prahviProcess: require('../assets/prahvi-process.png'),
      prahviDiagram: require('../assets/prahvi-diagram.png'),
      prahviFindigs: require('../assets/prahvi-findings.png'),
      prahviRough: require('../assets/prahvi-proto-rough.png'),
      prahviBerrycam: require('../assets/prahvi-rpi-screen.png'),
      prahviScreen: require('../assets/prahvi-screenshot.png'),
      prahviVui: require('../assets/prahvi-vui.png'),
      prahviOcr: require('../assets/prahvi-ocr.png'),
      prahviScrub: require('../assets/prahvi-scrub.gif'),
      prahviPlay: require('../assets/prahvi-playback.gif'),
      prahviHand: require('../assets/prahvi-hand.png'),
      prahviAlicia: require('../assets/prahvi-alicia.png'),
      teamItems: [
        {
          name: 'Yang Li',
          role: 'Computer Vision',
          url: 'https://www.linkedin.com/in/yli94/'
        },
        {
          name: 'Abe Millan',
          role: 'Text Processing',
          url: 'https://www.linkedin.com/in/abe-millan-25395334/'
        },
        {
          name: 'Blake Tsuzaki',
          role: 'Hardware & UI'
        }
      ]
    }
  },
  mounted () {
    global.setToolbarSubtext('PRAHVI')
  }
}
</script>

<style>

</style>
