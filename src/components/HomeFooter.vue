<template>
  <div class="home-section-container">
    <div class="home-section">
      <div class="big-title">
        <h1>Etc.</h1>
      </div>
      <div class="home-card-group">
        <div id='vrview'></div>
        <div class="vroverlay">
          <h3>"Adventure is out there!"</h3>
          <p class="vrquote">- Ellie, <i>Pixar's Up</i></p>
          <spacer vertical="20px" />
          Interested in working with me?
          <spacer vertical="10px" />
          <router-link to="/about" class="routelink link">
            Find my resume + more about me
            <div class="go-icon">
              <font-awesome-icon icon="arrow-alt-circle-right" />
            </div>
          </router-link>
          <spacer vertical="20px" />
          <div class="caption-container">
            Tip: You can pan around this photo
            <br />
            of
            <a href="https://en.wikipedia.org/wiki/Mission_Peak"
              class="link">
              Mission Peak
            </a>
            and view it in VR
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spacer from './Spacer.vue'

export default {
  name: 'HomeFooter',
  components: {
    Spacer
  },
  mounted() {
    var vrView = new VRView.Player('#vrview', {
      image: './img/mission-peak.jpg',
      is_stereo: false,
      default_yaw: 200,
      width: '100%',
      height: '100%'
    });
  }
}
</script>

<style scoped>
h1 {
  font-size: 15vw;
}
#vrview {
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  align-content: stretch;
}
.caption-container {
  display: inline-block;
}
.routelink {
  display: flex;
  flex-direction: row;
}
.go-icon {
  padding-top: 2px;
  padding-left: 5px;
}
.big-title {
  margin-bottom: -6.5%;
}
.home-card-group {
  padding-top: 14vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
}
.home-section-container {
  width: 100%;
  z-index: 2;
  padding-bottom: 20%;
}

.vrquote {
  text-align: right;
}

.vroverlay {
  padding: 40px;
}

@media screen and (max-width: 600px) {
  #vrview {
    width: 100vw;
    height: 100vw;
  }
}

@media screen and (min-width: 601px) {
  .vroverlay {
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    right: 40px;
    bottom: 40px;
    color: white;
  }
}

@media screen and (min-width: 1025px) {
  h1 {
    font-size: 154px;
  }
  #vrview {
    width: 1024px;
    height: 512px;
  }
  .home-card-group {
    padding-top: 144px;
  }
  .home-section-container {
    padding-bottom: 205px;
  }
}

.home-section {
  height: 100%;
  width: 100%;
  max-width: 1025px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
