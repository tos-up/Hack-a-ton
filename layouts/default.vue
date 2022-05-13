<template>
  <v-app dark>
    <NavBar />

    <Nuxt />

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  components: { NavBar },
}
</script>
