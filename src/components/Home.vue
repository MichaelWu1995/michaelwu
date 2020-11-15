<template>
  <div class="bg">
    <v-container fill-height fluid>
      <v-row align="center">
        <v-col cols="12" sm="5" align="center">
          <v-img
            src="../assets/profile/profile.png"
            class="profile"
            contain
          ></v-img>
        </v-col>

        <v-col cols="12" sm="7" class="d-flex align-center">
          <div>
            <h2 class="me">Hello</h2>
            <p style="font-size:40px">
              I am
              <strong>MICHAEL WU</strong>
            </p>
            <v-divider></v-divider>
            <small style="font-size:20px">
              A determined and passionate graduate from Monash Univeristy in
              Master of Business Information System.
              <br />Looking for a graduate-level work in the field of
              Information Technology.
            </small>

            <div class="d-flex align-center mt-3">
              <span v-for="(item, i) in this.socialMedia" :key="i">
                <a :href="item.link" style="text-decoration:none">
                  <v-icon :color="item.color" dark size="50" class="mr-3">{{
                    item.icon
                  }}</v-icon>
                </a>
              </span>
            </div>

            <v-btn dark class="primary rounded-xl mt-5" router to="/about"
              >Discovery More</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["socialMedia"]),
  },
};
</script>

<style lang="css" scoped>
.bg {
  background: url("../assets/background/bcg.jpg") no-repeat center;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

.profile {
  width: 60%;
  height: 100%;
}

.me {
  font-size: 30px;
}
</style>
