<template>
  <section class="home-submit">
    <v-container fill-height class="home-submit__content">
      <h1 class="home-title">Contests</h1>
      <v-row>
        <v-col
          v-for="contest in contests"
          :key="contest.title"
          md="4"
          sm="6"
          xs="12"
        >
          <v-card class="mx-auto">
            <v-card-title style="100vw"> {{ contest.title }} </v-card-title>
            <v-card-text>
              {{ contest.openTime }} - {{ contest.closeTime }}</v-card-text
            >
            <v-card-actions>
              <v-btn text @click="contest.isShowDetail = !contest.isShowDetail">
                Detail</v-btn
              >
              <v-btn text> Join </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="contest.isShowDetail">
                <v-divider></v-divider>
                <v-card-text> {{ contest.detail }} </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contests: [
        {
          title: '木更津高専Pre-Contest',
          openTime: '2022-01-01',
          closeTime: '2022-02-01',
          detail: '第一回木更津高専クローズドハッカソン',
          isShowDetail: false,
        },
        {
          title: 'こんてすとのれい',
          openTime: '2022-01-01',
          closeTime: '2022-02-01',
          detail: 'これはテストなだけ',
          isShowDetail: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home-submit__content {
  width: 100%;
  height: auto;
}
</style>
