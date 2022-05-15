 <template>
  <v-main>
    <NavBar />
    <User />
  </v-main>
</template>
 
<script>
import NavBar from '~/components/NavBar.vue'
import User from '~/components/User.vue'

export default {
  components: {
    NavBar,
    User,
  },
}
</script>
 
 <style>
</style>