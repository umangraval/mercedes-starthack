<template>
  <nav id="navbar" class="border-right">
    <v-app-bar color="primary" flat app clipped-left class="mb-3">
    <v-toolbar-title>
        <router-link :to="{ name: 'homepage'}" key="home">        
        <v-img :src="require('@/assets/img/mercedes_logo.svg')" width="55" height="55" class="ml-2"></v-img>       
        </router-link>
        
    </v-toolbar-title>
        <img src="./../assets/img/mercedes_brand_name.svg"  width="120" height="55" class="ml-4 mt-6">

    </v-app-bar>
  </nav>
  
</template>

<script>
export default {
    name:"navbar",
    components:{
      
    },
  data: () => ({
    
  }),

}
</script>

<style lang="scss">

</style>