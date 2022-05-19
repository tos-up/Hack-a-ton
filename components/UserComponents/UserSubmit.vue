<template>
  <section class="userSubmit">
    <v-container>
      <v-btn @click="signUp">とうろくいんぐ</v-btn>
    </v-container>
  </section>
</template>

<style>
</style>

<script>
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

export default {
  data() {
    return {
      emailAddress: 'tosup@tosup.dev',
      password: '1234@qwerzka',
    }
  },
  mounted() {},
  methods: {
    signUp: function () {
      const auth = getAuth()
      console.log(auth)
      createUserWithEmailAndPassword(auth, this.emailAddress, this.password)
        .then((userCredential) => {
          console.log('user created')
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
  },
}
</script>