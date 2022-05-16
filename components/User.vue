<template>
  <div>
    <v-btn text @cilck.native="SignUp">ユーザー作成ng</v-btn>
  </div>
</template>

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
    SignUp: function () {
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

<style>
</style>