<template>
  <v-main>
    <NavBar />
    <v-container> </v-container>
  </v-main>
</template>

<script>
import UserSubmit from '~/components/UserComponents/UserSubmit.vue'
import NavBar from '~/components/NavBar.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  middleware: 'checkLogin',
  components: { UserSubmit, NavBar },
}
</script>

<style>
</style>