 <template>
  <v-main>
    <NavBar />
    <UserSubmit />
  </v-main>
</template>
 
<script>
import NavBar from '~/components/NavBar.vue'
import UserSubmit from '~/components/UserComponents/UserSubmit.vue'

export default {
  components: {
    NavBar,
    UserSubmit,
  },
}
</script>
 
 <style>
</style>