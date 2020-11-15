<template>
  <div>
    <div class="wrap">
      <v-container fill-height fluid class="mask">
        <v-row>
          <v-col cols="12" align="center">
            <h1 style="font-size: 50px"><strong>MY PORTFOLIO</strong></h1>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container style="padding: 20px">
      <div>
        <h2 style="font-size: 40px"><strong>My Latest Works:</strong></h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="pa-5"
            v-for="item in projects"
            :key="item.id"
          >
            <div class="d-flex justify-start">
              <div>
                <v-card class="rounded-lg projectImg">
                  <v-img :src="item.url"></v-img>
                </v-card>
              </div>
              <div class="d-flex align-center ml-5">
                <div>
                  <strong style="font-size: 20px">{{ item.title }}</strong>
                  <div>
                    <a :href="item.btn_path" style="text-decoration: none">
                      <v-btn dark class="primary rounded-xl mt-3" small>{{
                        item.btn_title
                      }}</v-btn>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div>
                <p style="text-align: justify" class="mb-2">
                  {{ item.brief }}
                </p>
                <p style="font-size: 20px" class="mb-3">
                  <strong> Main Technologies:</strong>
                </p>
                <div class="d-flex flex-wrap justify-space-between">
                  <div
                    class="d-flex justify-center"
                    align="center"
                    v-for="(item, i) in item.tech"
                    :key="i"
                  >
                    <div>
                      <v-icon class="iconSize">{{ item.icon }}</v-icon>
                      <div>{{ item.name }}</div>
                    </div>
                  </div>
                </div>

                <div class="mt-2">
                  <p style="font-size: 20px" class="mb-0">
                    <strong> Source Code:</strong>
                  </p>

                  <a :href="item.github_path" style="text-decoration: none">
                    <v-btn tile icon>
                      <v-icon class="iconSize">mdi-github</v-icon>
                    </v-btn>
                  </a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["projects"]),
  },
};
</script>

<style lang="css" scoped>
.wrap {
  position: relative;
  background: url("../assets/background/portfolio.jpg") no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100% 100%;
}
.mask {
  width: 100%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.3);
}

.projectImg {
  width: 100px;
  height: 100px;
}

.iconSize {
  width: 25px;
  height: 25px;
}
</style>
