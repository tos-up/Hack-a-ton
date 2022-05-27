<template>
  <section class="showContest">
    <v-container v-if="isLoaded"> 
      <h1>loaded</h1>
    </v-container>
  </section>
</template>

<script>
import {query, collection, where, doc, getDocs, getFirestore} from "firebase/firestore";

export default {
  data() { 
    return {
      isLoaded: false,
      isFailure: false,
    }
  },
  async asyncData(context) {
    let db = await getFirestore();
    let q = await query(collection(db, "contests"), where("contestId", "==", context.params.id))
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      if (doc.data() === null) isFailure = true;
      console.log(doc.id, " => ", doc.data());
      this.isLoaded = true;
    })

    return {}
  },
  created() {
    
  }
}
</script>