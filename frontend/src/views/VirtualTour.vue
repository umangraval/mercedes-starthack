<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >
  <!-- <router-link :to="{ name: 'car-selection'}" key="car-selection">  -->
      <v-icon size="25" color="white" @click="goBack()">mdi-arrow-left</v-icon><span class="white--text ml-1">back</span>
    <!-- </router-link> -->
    <h3 class="title">Full Virtual Tour</h3>

  </v-card>
  
</template>

<script>

export default {
  name: 'VirtualTour',

  data: () => ({
    goBack() {
        return this.$router.go(-1)
      }
  }),
  
}
</script>

<style scoped>


.container{
  background: #000;
}
.title{
  font-size: 1.5rem !important;
  margin-bottom: 8px !important;
  margin-top: 15px !important;
  margin-left: 25px ;
  color: rgb(216, 216, 216); 
}

</style>
