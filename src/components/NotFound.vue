<template>
  <div class="bg">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" align="center">
          <v-img
            src="../assets/background/error.png"
            contain
            class="errorImg"
          ></v-img>
        </v-col>

        <v-col cols="12" sm="6" class="d-flex align-center">
          <div>
            <div style="font-size: 40px"><strong>Oops!</strong></div>
            <div style="font-size: 20px">
              This page is unavailable. Please return homepage.
            </div>
            <v-btn class="mt-5 primary rounded-xl" to="/">Go Back Home</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="css" scoped>
.errorImg {
  width: 400px;
  height: 400px;
}

.bg {
  background: url("../assets/background/bcg.jpg") no-repeat center;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>