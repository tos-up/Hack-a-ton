<template>
  <v-main>
    <NavBar />
    <section class="kisa_C">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="contest.title"
              readonly
              prepend-icon="mdi-bow-tie"
              label="コンテスト名"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="contest.host"
              readonly
              prepend-icon="mdi-account"
              label="開催者"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  data() {
    return {
      contest: {
        title: '木更津高専クローズドハッカソン',
        host: 'HAT Administrator',
      },
    }
  },
  components: {
    NavBar,
  },
}
</script>

<style>
</style>