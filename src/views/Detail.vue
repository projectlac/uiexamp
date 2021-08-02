<template>
  <v-sheet>
    <NavAbout />
    <NewsDetail />
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import NavAbout from '../components/NavAbout.vue'
import NewsDetail from '../components/NewsDetail.vue'
export default {
  name: "Detail",
  components: {
       NewsDetail,
       NavAbout
  },
  computed:{
   
  },
 
};
</script>
<style scoped>

</style>
