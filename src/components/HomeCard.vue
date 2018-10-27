<template>
    <div :style="{backgroundColor: card.color}" class="home-card-container">
        <router-link class="home-card" @mouseenter="handleMouseEnter()" @mouseleave="handleMouseLeave()" :to="card.link != null ? card.link : ''">
            <div class="home-card-foreground">
                <transition name="img-load">
                    <div class="home-card-foreground-image-outer" v-show="card.fgSrc != null && this.foregroundLoaded">
                        <img class="home-card-foreground-image" :src="card.fgSrc" :onLoad="handleForegroundLoaded()" />
                    </div>
                </transition>
                <div class="home-card-foreground-text" :style="{color:card.fgTextColor}">
                    <h2>{{card.fgText}}</h2>
                    <font-awesome-icon class="go-icon" icon="arrow-alt-circle-right" v-if="card.link != null"/>
                </div>
            </div>
            <transition name="img-load">
                <div class="home-card-background" v-show="card.bgSrc != null && this.backgroundLoaded">
                    <img class="home-card-background-image" :src="card.bgSrc" :onLoad="handleBackgroundLoaded()" />
                </div>
            </transition>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeCard',
  data () {
    return {
      backgroundLoaded: false,
      foregroundLoaded: false,
      isHovering: false
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleBackgroundLoaded () {
      this.backgroundLoaded = true
    },
    handleForegroundLoaded () {
      this.foregroundLoaded = true
    },
    handleMouseEnter () {
      this.isHovering = true
    },
    handleMouseLeave () {
      this.isHovering = false
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.go-icon {
    padding-left: 10px;
    font-size: 1.5em;
}
.home-card-foreground {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
}
.home-card-background {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 2;
}
.home-card-foreground-image-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.home-card-background-image {
    width: 100%;
    height: 100%;
}
.home-card-foreground-image {
    width: 50%;
}
.home-card-foreground-text {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
}
.home-card-container {
    width: 50vw;
    height: 50vw;
    background-color: gray;
    overflow: hidden;
    position: relative;
}
@media screen and (max-width: 600px) {
    .home-card-container {
        width: 100vw;
        height: 100vw;
    }
}

@media screen and (min-width: 1025px) {
    .home-card-container {
        width: 512px;
        height: 512px;
    }
}

.img-load-enter-active {
    transition: all 0.2s;
}
.img-load-enter {
    opacity: 0;
}
</style>
