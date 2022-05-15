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
import HomeHero from './HomeComponents/HomeHero.vue'
import HomeAbout from './HomeComponents/HomeAbout.vue'
import HomeSubmit from './HomeComponents/HomeSubmit.vue'
import HomeContact from './HomeComponents/HomeContact.vue'

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
