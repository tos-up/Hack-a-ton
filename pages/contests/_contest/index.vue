<template>
  <v-main>
    <NavBar />
    <ShowContest />
  </v-main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import ShowContest from '~/components/ContestComponents/showContest.vue';
export default {
    async asyncData(context) {
        return {  };
    },
    components: { NavBar, ShowContest }
}
</script>

<style>
</style>
