<template>
  <section class="home-about">
    <v-container fill-height class="home-about__content">
      <v-row>
        <v-col class="home-about__content-title">
          <h1>What is</h1>
          <h1>Kisa_Hackathon?</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="home-about__content-text">
          <p>木更津高専の有志が開催する、</p>
          <p>短期間集中型の開発コンテストです。</p>
          <!-- <p>実践することで身につく力を</p>
          <p>みんなに。</p> <-アホほどダサいので却下 -->
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped >
.home-about__content {
  width: 100vw;
  min-height: 50vh;

  &-title {
    color: white;
    text-align: left;
    font-size: clamp(1.375rem, 2vw + 1rem, 2.938rem);
    // font-weight: bold;
  }
  &-text {
    color: white;
    text-align: left;
    font-size: clamp(0.938rem, 2vw + 1rem, 1.55rem);
    white-space: nowrap;
  }
}
</style>
