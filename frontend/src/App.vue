<template>
  <v-app id="inspire">
    
    <!-- TOOLBAR -->
   
    <NavBar v-if="!showLandingPageToolbar() && !notFoundPage()"/>
 
    <!-- CONTENT USER PAGE -->
    <v-main class="custom-container pt-12">
      <v-container class="custom-container">

        <!-- MAIN CARD -->
        <v-row>       
          <v-col cols="12" class="pt-0 pb-0">
            <v-row align="center" justify="center">       
              <v-col cols="12" class="pt-0 pb-0 card-container">
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

  export default {
    name:"app",
    components:{
      NavBar,
    },

    methods:{

      showLandingPageToolbar(){        
          return this.$route.name=='homepage';
      },

      notFoundPage(){        
          return this.$route.name=='page-not-found';
      },

    }

  }
</script>

<style>
  html{
    overflow-y: auto;
  }
</style>
