<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >         

  <div class="cars-container justify-center" >
    <div class="car-div">
      <v-img :src="require('@/assets/img/car-a.webp')" class="car-image" ></v-img>
      <span class="white--text">Class A</span>
    </div>

    <div class="actions-div">
      <div class="white--text">
        <v-btn 
          color="secondary" 
          rounded 
          depressed 
          large 
          class="black--text mt-10 btn-text"
          to="/car-selection">
          {{ $t('Homepage.gettingStarted') }}
        </v-btn>  
      </div>
      <div class="white--text">
        <v-btn 
          color="secondary" 
          rounded 
          depressed 
          large 
          class="black--text mt-10 btn-text"
          to="/car-selection">
          {{ $t('Homepage.gettingStarted') }}
        </v-btn>  
      </div>
      <div class="white--text">
        <v-btn 
          color="secondary" 
          rounded 
          depressed 
          large 
          class="black--text mt-10 btn-text"
          to="/car-selection">
          {{ $t('Homepage.gettingStarted') }}
        </v-btn>  
      </div>
      
    
    </div>

  </div>

  </v-card>
  
</template>

<script>

export default {
  name: 'Homepage',

  data: () => ({

  })
}
</script>

<style scoped>


.container{
  background: #000;
}
.title{
  font-size: 2.25rem !important;
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  color: rgb(216, 216, 216); 
}

.subtitle{
  color: #fff !important;
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
  grid-column-gap: 10px;
  grid-template-columns: auto auto;
}

.actions-div{
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: auto auto auto;
}
</style>
