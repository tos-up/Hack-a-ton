<template>
  <section class="home">
    <HomeHero id="top" />
    <v-divider />
    <HomeAbout id="about" />
    <v-divider />
    <HomeSubmit id="submit" />
    <v-divider />
    <HomeContact id="contact" />
  </section>
</template>

<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeSubmit from './HomeSubmit.vue'
import HomeContact from './HomeContact.vue'

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeSubmit,
    HomeContact,
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
