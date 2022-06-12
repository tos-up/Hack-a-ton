<template>
  <section class="userSubmit">
    <v-container fluid>
      <v-row align="center" align-content="center">
        <v-col>
          <v-btn class="submitBtn">
            <v-icon>mdi-google</v-icon>Sign Up with Google</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="submitBtn"
            ><v-icon>mdi-twitter</v-icon>Sign Up with Twitter</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="submitBtn"
            ><v-icon>mdi-github</v-icon>Sign Up with GitHub</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="submitBtn"
            ><v-icon>mdi-email</v-icon>Sign Up with E-mail</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style>
.submitBtn {
  width: 25vw;
  height: 8vh;
}
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