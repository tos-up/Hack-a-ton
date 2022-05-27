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
            <v-card-text> 参加条件: {{ contest.condition }}</v-card-text>
            <v-card-actions>
              <v-btn text @click="contest.isShowDetail = !contest.isShowDetail">
                Detail</v-btn
              >
              <v-btn
                text
                href="https://docs.google.com/forms/d/e/1FAIpQLScw_19QK4w9qQ9KQB_AHOGJwFj0wA_HhhP-NRg82ANf8i_R_w/viewform"
              >
                Join
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="contest.isShowDetail">
                <v-divider></v-divider>
                <v-card-title>詳細情報</v-card-title>
                <v-card-text v-for="detail in contest.details" :key="detail">{{
                  detail
                }}</v-card-text>
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
          openTime: '2022-06-13',
          closeTime: '2022-06-19',
          subTitle: '第一回木更津高専クローズドハッカソン',
          condition: '木更津高専 本科生',
          isShowDetail: false,
          deadlineDate: '2022-06-11',
          details: [
            'キックオフ: 6月12日(日)',
            '事前開発期間: 6月13日(月)-6月18日(土)',
            '成果発表: 6月19日(日) 16:00-',
          ],
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
