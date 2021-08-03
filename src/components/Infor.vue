<template>
  <div class="news___about  py-15">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="rev in reveal" :key="rev.id">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto">
              <v-img height="200" :src="rev.img">
              <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal "
                style="height: 100%;"
              >
                <v-img src="https://zxh.io/img/in-post/2021-07-28/header.jpeg" height="200" />
              </div>
            </v-expand-transition>
            </v-img>
              <v-card-text>

                <div>Word of the Day</div>
                
                <p class="text-h4 text--primary">
                  el·ee·mos·y·nar·y
                </p>

                <p>adjective</p>
                <div class="text--primary">
                  relating to or dependent on charity; charitable.<br />
                  "an eleemosynary educational institution."
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4" @click="rev.flip = true">
                  Learn More
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="rev.flip"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      Origin
                    </p>
                    <p>
                      late 16th century (as a noun denoting a place where alms
                      were distributed): from medieval Latin eleemosynarius,
                      from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                      ‘compassion’
                    </p>
                    <p>
                      late 16th century (as a noun denoting a place where alms
                      were distributed): from medieval Latin eleemosynarius,
                      from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                      ‘compassion’
                    </p>
                    <v-chip-group
                      v-model="rev.selection"
                      active-class="deep-purple accent-4 white--text"
                      class="chip___text"
                      column
                    >
                      <v-chip class="px-3">5:30PM</v-chip>

                      <v-chip class="px-3">7:30PM</v-chip>

                      <v-chip class="px-3">8:00PM</v-chip>

                      <v-chip class="px-3">9:00PM</v-chip>
                    </v-chip-group>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="rev.flip = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "infor",
  data() {
    return {
      reveal: [
        {
          id: 1,
          flip: false,
          img:
            "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
          selection: 1,
        },
        {
          id: 2,
          flip: false,
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          selection: 0,
        },
        {
          id: 3,
          flip: false,
          img:
            "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
          selection: 3,
        },
      ],
    };
  },
};
</script>
