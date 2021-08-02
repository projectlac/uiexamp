<template>
  <div class="ListNews text-left">
    <h2 class="white--text text-h6">
      Tin mới
    </h2>
    <v-list color="#0e0e0e">
      <v-list-item
        v-for="news in newsList"
        :key="news.id"
        class="pa-0 text-capitalize"
      >
        <v-list-item-content>
          <v-list-item-title >
              <router-link :to="'./detail/' +  news.id " class="white--text text-decoration-none">{{ news.title }}</router-link>
          </v-list-item-title>
          <v-list-item-subtitle class="white--text mt-2">
            <i small>July 15, 2021</i>
          </v-list-item-subtitle>
          <v-divider class="mt-1"></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "listnews",
  created() {
    this.getPost();
  },
  computed: {
    ...mapState("newsList", ["newsList"]),
  },
  methods: {
    ...mapActions("newsList", ["getPost"]),
  },
};
</script>

<style></style>
