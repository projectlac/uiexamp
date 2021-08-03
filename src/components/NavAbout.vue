<template>
  <div class="nav___about py-15 ">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="content___about my-5 text-left mt-10 mt-md-0">
            <v-row>
              <v-col cols="2" sm="2" md="1">
                <v-badge offset-x="12" offset-y="12" bottom bordered dot>
                  <v-avatar color="blue">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt=""
                    />
                  </v-avatar>
                </v-badge>
              </v-col>
              <v-col class="hidden-xs-only" sm="5" md="3">
                <p class="subtitle-2 white--text mb-0">Xin chào</p>
                <h2 class="white--text subtitle-1 font-weight-bold">
                  Tuyến Đặng
                </h2>
              </v-col>
              <v-col class="hidden-xs-only" cols="5" md="5"> </v-col>
              <v-col class="text-right d-flex align-center justify-end">
                <v-btn class="mx-2" fab dark small color="pink" @click="addCount">
                  <v-icon dark>
                    mdi-heart
                  </v-icon>
                </v-btn>

                <v-btn class="mx-2" fab dark small color="indigo">
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>

                <v-btn class="mx-2" fab dark small color="teal">
                  <v-icon dark>
                    mdi-format-list-bulleted-square
                  </v-icon>
                </v-btn>

                <v-btn class="mx-2" fab dark small color="cyan">
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="11" md="8">
               
                <v-text-field
                  outlined
                  label="Bạn muốn tìm gì?"
                  solo
                  shaped
                  dense
                  prepend-inner-icon="mdi-search-web"
                  height="40px"
                  hide-details="auto"
                ></v-text-field>

                <v-chip-group multiple active-class="primary white--text">
                  <v-chip class="white black--text subtitle-2" small>
                    Xã hội
                  </v-chip>
                  <v-chip class="white black--text subtitle-2" small>
                    Khoa học - Kỹ thuật
                  </v-chip>
                  <v-chip class="white black--text subtitle-2" small>
                    Lịch sử
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "NavAbout",

  created() {
    this.getPost();
    this.items = this.newsList.map((news) => {
      return news.title;
    });
  
  },
  computed: {
    ...mapState("newsList", ["newsList"]),
    
  },
  methods: {
    ...mapActions("newsList", ["getPost"]),
    ...mapActions("notifi", ["addCount"]),
  },
  
};
</script>
