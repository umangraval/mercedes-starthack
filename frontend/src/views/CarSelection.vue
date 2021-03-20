<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >         

  <div class="cars-container justify-center" >
    <router-link :to="{ name: 'car-details'}" key="car-details"> 
      <div class="car-div">
        <v-img :src="require('@/assets/img/car-a.webp')" class="car-image"></v-img>
        <span class="white--text">Class A</span>
      </div>
    </router-link>

    <div class="car-div">
      <v-img :src="require('@/assets/img/car-b.webp')" class="car-image"></v-img>
      <span class="white--text">Class B</span>
    </div>

    <div class="car-div">
      <v-img :src="require('@/assets/img/car-e.webp')" class="car-image"></v-img>
      <span class="white--text">Class E</span>
    </div>

    <div class="car-div">
      <v-img :src="require('@/assets/img/car-g.webp')" class="car-image"></v-img>
      <span class="white--text">Class G</span>
    </div>
  </div>

  </v-card>
  
</template>

<script>

export default {
  name: 'CarSelection',

  data: () => ({

  })
}
</script>

<style scoped>


.container{
  background: #000;
}

.btn-text{
  text-transform: none;
  max-width: 200px;
}

.car-image{
  max-width: 200px;
  max-height: 95px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.car-div{
  text-align: center;
}

.cars-container{
  display: grid;
  grid-column-gap: 100px;
  grid-row-gap: 60px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}

@media only screen and (max-width: 950px) {
  .cars-container{
    display: grid;
    grid-column-gap: 100px;
    grid-row-gap: 60px;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}
</style>
