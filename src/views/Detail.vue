<template>
  <v-sheet>
    <NavAbout />
    
    <NewsDetail />
    <Footer/>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import NavAbout from "../components/NavAbout.vue";
import NewsDetail from "../components/NewsDetail.vue";
import Footer from '../components/Footer.vue'
export default {
  name: "Detail",
  components: {
    NewsDetail,
    NavAbout,
    Footer
  },
  computed: {},
};
</script>
<style scoped></style>
