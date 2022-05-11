<template>
  <v-row>
    <v-col>
      <div>
        <NavBar />
        <div class="slash1 bg1">
          <h2>hello world</h2>
        </div>
        <div class="slash2">
          <h2>KISARAZU HACKATHON</h2>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'IndexPage',
}
</script>

<style>
.bg1 {
  background-image: url('https://pbs.twimg.com/media/FSebWt5aQAEmI-U?format=jpg&name=large');
  background-size: cover;
}

.slash2 > h2 {
  width: 50%;
  margin: 0 auto;
  padding: 30px 0;
  text-align: right;
}

.slash1 > h2 {
  width: 50%;
  margin: 0 auto;
  padding: 30px 0;
}

.slash2 {
  -webkit-clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
  background-color: #191970;
  color: #ccc;
  padding: 60px 0 10px 0;
}

.slash1 {
  color: #bbb;
}
</style>
