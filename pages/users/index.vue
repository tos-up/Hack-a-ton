<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <UserSubmit />
          </v-col>
          <v-col>
            <UserLogin />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import UserSubmit from '~/components/UserComponents/UserSubmit.vue';
export default {
    components: { UserSubmit }
}
</script>

<style>

</style>