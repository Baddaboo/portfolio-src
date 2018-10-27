<template>
  <transition name="appear">
    <div class="fab-container" v-show="show">
      <button class="fab" v-on:click="handleClick">
        <transition name="spin1">
          <font-awesome-icon v-if="isClose" icon="times" class="icon" />
        </transition>
        <transition name="spin2">
          <font-awesome-icon v-if="!isClose" icon="comment" class="icon" />
        </transition>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Fab',
  props: {
    show: false,
    isClose: false
  },
  methods: {
    handleClick (event) {
      this.$emit('fab-clicked')
    }
  }
}
</script>

<style scoped>
.fab-container {
  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 56px;
  height: 56px;

  max-width: 56px;
  max-height: 56px;
}
.fab {
  display: inline-block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 35px;
  background-color: #2c3e50;
  box-shadow: 0px 4px 5px rgba(0,0,0,0.3);
}
.icon {
  position: absolute;
  color: white;
  width: 100%;
  height: 40%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.appear-enter-active, .appear-leave-active {
  transition: all 0.2s;
}
.appear-enter, .appear-leave-to {
  transform: scale(0);
  opacity: 0;
}

.spin1-enter-active,
.spin1-leave-active,
.spin2-enter-active,
.spin2-leave-active {
  transition: all 0.3s;
}

.spin1-enter, .spin1-leave-to {
  transform: rotateZ(-90deg) scale(0.5, 0.5);
  opacity: 0;
}

.spin2-enter, .spin2-leave-to {
  transform: rotateZ(90deg) scale(0.5, 0.5);
  opacity: 0;
}

:focus {
  outline: none !important;
}
</style>
