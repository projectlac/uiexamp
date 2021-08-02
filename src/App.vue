<template>
  <v-app>
    <div class="menu">
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
          </v-col>
          <v-col cols="7" class="text-right">
            <router-link
              to="/"
              class="my-2 mx-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="my-2 mx-3  blue--text darken-1--text bold font-weight-bold text-decoration-none"
              >About</router-link
            >
            <router-link
              to="/"
              class="my-2 mx-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
              >Info</router-link
            >
            <router-link
              to="/about"
              class="my-2 mx-3 blue--text darken-1--text bold font-weight-bold text-decoration-none"
              >Company</router-link
            >
            <v-btn rounded class="blue darken-1 my-2 mx-3">
              <router-link
                to="/about"
                class="my-2 mx-3 white--text bold font-weight-bold text-decoration-none"
                >Contact us</router-link
              >
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
