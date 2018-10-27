<template>
  <div class="page-paragraph-container">
    <p class="page-paragraph-text">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageParagraph'
}
</script>

<style scoped>
.page-paragraph-container {
  width: 100%;
}
.page-paragraph-text {
  width: 75%;
  text-align: justify;
  margin: auto;
}
@media screen and (max-width: 600px) {
  .page-paragraph-text {
    width: 100%;
  }
}
</style>
