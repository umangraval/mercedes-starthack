<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >         
    
    <router-link :to="{ name: 'car-selection'}" key="car-selection"> 
      <v-icon size="25" color="white">mdi-arrow-left</v-icon><span class="white--text ml-1">back</span>
    </router-link>

  <div class="cars-container justify-center mt-10" >
    <div class="car-div">
      <v-img :src="require('@/assets/img/car-e.webp')" class="car-image" ></v-img>
      <span class="white--text">Class E</span>
    </div>

    <div class="actions-div">
      <div class="white--text">
        <v-btn 
          color="secondary" 
          depressed 
          large 
          block
          class="black--text btn-text"
          to="/virtual-tour">
          {{ $t('CarDetails.action1') }}
        </v-btn>  
      </div>
      <div class="white--text">
        <v-btn 
          color="secondary" 
          depressed 
          large 
          block
          class="black--text btn-text">
          {{ $t('CarDetails.action2') }}
        </v-btn>  
      </div>
      <div class="white--text">
        <v-btn 
          color="secondary" 
          depressed 
          large 
          block
          class="black--text btn-text">
          {{ $t('CarDetails.action3') }}
        </v-btn>  
      </div>
      

    </div>

  </div>

  </v-card>
  
</template>

<script>

export default {
  name: 'CarDetailsE',

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
  max-width: 120%;
  max-height: 120%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.car-div{
  text-align: center;
}

.cars-container{
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: auto 300px;
}

@media only screen and (max-width: 950px) {
  .cars-container{
    display: grid;
    grid-row-gap: 50px;
    grid-template-columns: auto;
  }
}

.actions-div{
  display: grid;
  grid-row-gap: 30px;
  grid-template-rows: auto auto auto;
}
</style>
