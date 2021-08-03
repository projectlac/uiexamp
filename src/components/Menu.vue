<template>
  <div class="menu">
    <v-container>
      <v-row>
        <v-col cols="2" sm="2" md="5">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </v-col>
        <v-col cols="10" md="7" sm="10" class="text-right">
          <router-link
            to="/"
            class="my-2 mx-2 mx-md-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="my-2 mx-2 mx-md-3  blue--text darken-1--text bold font-weight-bold text-decoration-none"
            >About</router-link
          >
          <router-link
            to="/info"
            class="my-2 mx-2 mx-md-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
            >Info</router-link
          >

          <router-link
            to="/"
            class="my-2 mx-2 mx-md-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
          >
            Contact us
          </router-link>

          <v-badge
            color="red"
            overlap
            offset-x="27"
            offset-y="20"
            :value="counter"
            :content="counter"
          >
          
            <v-menu offset-y right max-width="300px" max-height="250px">
                
              <template v-slot:activator="{ on, attrs }" >
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  rounded
                  class="blue darken-1 my-2 mx-3"
                >
                  Notifications
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for=" i in noti" :key="i.id" class="py-2 hover-on">
                  
                      <div class="d-flex ">
                        <v-avatar color="primary white--text" v-if="i.img == ''">
                          {{ i.name }}
                        </v-avatar>
                        <v-avatar color="primary white--text" v-else>
                          <v-img :src="i.img"></v-img>
                        </v-avatar>
                         
                      <div class="notifi_content text-left px-2">
                          <p class="mb-0" v-html="i.notification"></p>
                          <p class="mb-0">6 mins ago</p>
                      </div>
                      </div>

                </v-list-item>
                <v-list-item>
                   <div class="d-flex justify-center" style="width:100%; font-size:12px">
                        <i >Xem thêm...</i>
                   </div>
                </v-list-item>
              </v-list>
            </v-menu>
            <!-- <p
               
                class="my-2 mx-2 mx-md-3 white--text bold font-weight-bold text-decoration-none"
                >Notifi</p
              > -->
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
    <div class="custome-btn">
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("notifi", ["counter","noti"]),
  },
  methods: {
    ...mapActions("notifi", ["addCount"]),
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style></style>
