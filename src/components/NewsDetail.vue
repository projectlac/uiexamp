<template>
  <div class="news___about ">
    <v-overlay :opacity="1" :value="overlay">
      <v-progress-circular indeterminate size="64">
        
      </v-progress-circular>
    </v-overlay>
    <v-container class="py-7">
      <v-row justify="center">
        <v-col cols="12">
          <div class="ListNews">
            <h2 class="white--text text-h6 text-capitalize">
              {{ Post.title }}
            </h2>
            <i class="white--text text-capitalize">July 15, 2021</i>
            <v-divider class="mt-3"></v-divider>
            <p class="white--text mt-3 text-left">
              {{ Post.body }}
            </p>
            <v-row class="mt-10">
              <v-col cols="6">
                <router-link
                  v-if="!nullprev"
                  :to="'/detail/' + prev"
                  class="white--text text-decoration-none"
                >
                  <v-btn class="blue darken-1">
                    <i class="text-capitalize white--text">-- Bài trước </i>
                  </v-btn>
                </router-link>
              </v-col>
              <v-col cols="6">
                <router-link
                  v-if="!nullnext"
                  :to="'/detail/' + next"
                  class="white--text text-decoration-none"
                  ><v-btn class="blue darken-1">
                    <i class="text-capitalize white--text">Bài sau -- </i>
                  </v-btn></router-link
                >
              </v-col>
            </v-row>
            <v-divider class="mt-3"></v-divider>
            <h5
              class="white--text text-capitalize font-weight-regular mt-4 text-left"
            >
              Bình luận
            </h5>
            <v-col cols="6 white--text"> </v-col>
            <v-list color="#0e0e0e">
              <v-list-item
                v-for="cmt in Comment"
                :key="cmt.id"
                class="pa-0 text-capitalize"
              >
                <v-row class="white--text mb-4">
                  <v-col cols="3" md="1">
                    <div class="d-flex justify-center ">
                      <v-badge
                        dot
                        bottom
                        offset-x="12"
                        offset-y="12"
                        bordered
                        color="warning"
                      >
                        <v-avatar color="primary">
                          G
                        </v-avatar>
                      </v-badge>
                    </div>
                  </v-col>
                  <v-col cols="9" md="11" class="text-left">
                    <p class="name_cmt mb-2 d-flex align-center flex-wrap">
                      {{ cmt.name }} -
                      <i>July 15, 2021 - </i>
                      <v-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        small
                      ></v-rating>
                    </p>
                    <div class="hidden-xs-only content_cmt">{{ cmt.body }}</div>
                  </v-col>
                  <v-col cols="12 hidden-md-only hidden-sm-only content_cmt text-left ">
                      {{ cmt.body }}
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "NewsDetail",
  data() {
    return {
      prev: 0,
      next: 0,
      nullprev: false,
      nullnext: false,
      rating: 4,
      progress: 0,
      overlay: true,
    };
  },
  watch: {
    "$route.params.id": {
      handler: function(id) {
        this.changeID(id);
      },
      deep: true,
    },
    checkLoad: function(val){
 
      this.overlay = val
    }
  },
  created() {
    this.changeID(this.$route.params.id);
  },
  destroyed(){
    this.resetData();
  },
  computed: {
    ...mapState("newsList", ["Post", "newsList", "Comment", "checkLoad"]),
  },
  methods: {
    ...mapActions("newsList", ["detailPost", "getPost", "resetData"]),
    changeID: function(id) {
      this.detailPost(id);
      this.next = parseInt(id) + 1;
      this.prev = parseInt(id) - 1;
      this.nullprev = this.prev <= 0 ? true : false;
      this.nullnext = this.next > 10 ? true : false;
    },
  },
};
</script>

<style></style>
