<template>
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="750px"
  >
    <!-- <router-link :to="{ name: 'car-selection'}" key="car-selection">  -->
    <v-icon size="25" color="white" @click="goBack()">mdi-arrow-left</v-icon
    ><span class="white--text ml-1">back</span>
    <!-- </router-link> -->
    <h3 class="title">Engine Specs</h3>
    <div class="div-buttons">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
           class="bnt-text mr-4"
        >
          QR Code
        </v-btn>
      </template>

      <v-card>
        <v-img :src="require('@/assets/img/qr_code.png')" ></v-img>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="bnt-text"
        >
          AR Maker
        </v-btn>
      </template>

      <v-card>
        <v-img :src="require('@/assets/img/ar_marker.png')" ></v-img>
      </v-card>
    </v-dialog>

    </div>
    <video class="mt-3" width="100%" height="400" controls>
      <source src="../assets/videos/specs.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </v-card>
</template>

<script>
export default {
  name: "EngineSpecs",

  data: () => ({
    goBack() {
      return this.$router.go(-1);
    }
  })
};
</script>

<style scoped>
.container {
  background: #000;
}
.title {
  font-size: 1.5rem !important;
  margin-bottom: 8px !important;
  margin-top: 15px !important;
  margin-left: 25px;
  color: rgb(216, 216, 216);
}
</style>
