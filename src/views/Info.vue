<template>
  <v-sheet>
    <NavAbout />
    <Infor />
    <Footer/>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import NavAbout from "../components/NavAbout.vue";
import Infor from "../components/Infor.vue";
import Footer from '../components/Footer.vue'
export default {
  name: "Info",
  components: {
    NavAbout,
    Infor,
    Footer
  },
  computed: {},
};
</script>
<style scoped></style>
