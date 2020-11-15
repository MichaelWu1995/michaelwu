<template>
  <div>
    <div class="wrap">
      <v-container fill-height fluid class="mask">
        <v-row>
          <v-col cols="12" align="center">
            <h1 style="font-size: 50px"><strong>CONTACT ME</strong></h1>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="padding: 20px">
      <div align="center" style="font-size: 20px">
        If you are intersted in me, I would welcome the opportunity to elaborate
        on my skills and abilities in the interview. <br />I will be available
        at any time.
      </div>
      <br />
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" sm="4" offset-sm="1" align="center">
          <mapbox mapWidth="100%" mapHeight="500px" class="pa-4"></mapbox>
        </v-col>
        <v-col cols="12" sm="4" offset-sm="1" class="d-flex align-center justify-center">
          <div>
            <div>
              <p style="font-size: 30px"><strong>Send Me Messages:</strong></p>
              <div class="d-flex align-center">
                <span class="mr-5">
                  <v-icon class="primary--text">mdi-cellphone</v-icon>
                </span>

                <span style="font-size: 20px">0451 699 710</span>
              </div>

              <div class="d-flex align-center mt-2">
                <span class="mr-5">
                  <v-icon class="primary--text">mdi-email</v-icon>
                </span>
                <span style="font-size: 20px">wuxueyuan10@gmail.com</span>
              </div>
            </div>

            <div class="mt-5">
              <p style="font-size: 30px"><strong>Find Me on Map:</strong></p>
              <div class="d-flex align-center">
                <span class="mr-5">
                  <v-icon class="primary--text">mdi-map-marker</v-icon>
                </span>

                <span style="font-size: 20px"
                  >57 Morgan Street, Carnegie, VIC, 3163</span
                >
              </div>
            </div>

            <div class="mt-5">
              <p style="font-size: 30px"><strong>Find Me Socially:</strong></p>
              <div class="d-flex align-center">
                <span v-for="(item, i) in this.socialMedia" :key="i">
                  <a :href="item.link" style="text-decoration: none">
                    <v-icon :color="item.color" size="50" class="mr-3">{{
                      item.icon
                    }}</v-icon>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import mapbox from "./Map.vue";
import { mapState } from "vuex";
export default {
  components: {
    mapbox,
  },
  computed: {
    ...mapState(["socialMedia"]),
  },
};
</script>

<style lang="css" scoped>
.wrap {
  position: relative;
  background: url("../assets/background/contact.jpg") no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100% 100%;
}
.mask {
  width: 100%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
