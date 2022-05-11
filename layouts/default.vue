<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <v-layout>
          <Nuxt />
        </v-layout>
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
