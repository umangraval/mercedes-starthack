<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >         
    <v-list-item three-line>
      <v-list-item-content align="center"
        justify="center" class="justify-center"> 
        <v-img :src="require('@/assets/img/mercedes_logo.svg')" max-width="25%"></v-img>
        <v-list-item-title class="title">{{ $t('Homepage.title') }}</v-list-item-title>
        <v-list-item-subtitle class="subtitle mb-4">{{ $t('Homepage.subtitle') }}</v-list-item-subtitle>            
      <v-btn 
        color="secondary" 
        rounded 
        depressed 
        large 
        class="black--text mt-10 btn-text"
        to="/car-selection">
        {{ $t('Homepage.gettingStarted') }}
      </v-btn>  
      </v-list-item-content>

   
    </v-list-item>

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

</style>
