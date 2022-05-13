<template>
  <section class="home-hero">
    <v-container
      fluid
      fill-height
      class="home-hero__content linear__background"
    >
      <v-row>
        <v-col class="home-hero__content-text float__content">
          <h1>Kisa_Hackathon</h1>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.home-hero__content {
  background: url('~/assets/photo1.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  &-text {
    color: white;
    text-align: center;
    font-size: clamp(1rem, 2vw + 1rem, 2.938rem);
    font-weight: bold;
  }
}

.linear__background {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1));
}

.float__content {
  display: inline-block;
  font-weight: bold;
  text-shadow: 2px 2px 10px #777, -2px 2px 10px #777, 2px -2px 10px #777,
    -2px -2px 10px #777;
}
</style>