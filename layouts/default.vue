<template>
  <v-app dark>
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

<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 2px;
}
</style>
