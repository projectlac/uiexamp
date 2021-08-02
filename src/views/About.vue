<template>
  <div class="about">
    <NavAbout />
    <div class="news___about py-7">
      <v-container>
        <v-row>
          <v-col cols="9">
              <ListNews />
          </v-col>
          <v-col col3="3"></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import ListNews from '../components/ListNews.vue'
import NavAbout from '../components/NavAbout.vue'
export default {
  name:'about',
  components:{
    ListNews,
    NavAbout
  }
}
</script>
<style scoped>

/* .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  } */
</style>
