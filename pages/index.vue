<template>
  <v-main>
    <NavBar />
    <Home />
  </v-main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Home from '~/components/Home.vue'
export default {
  data() {
    return {}
  },
  name: 'IndexPage',
  components: {
    NavBar,
    Home,
  },
}
</script>

<style>
.myheadline {
  display: block;
  text-align: start;
  position: relative;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 2px;
}
</style>
