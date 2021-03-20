<template>
  <div class="mt-12 px-3">
    <h1 class="white--text">NOT FOUND</h1>
    <p class="white--text">You just hit a route that doesn't exist... the sadness.</p>
    <router-link :to="{ name: 'homepage'}">
      <a class="go-back-link" > Go Back</a>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',

  data () {   

    return{
     
    }
  },
}
</script>

<style scoped>
  .go-back-link{
    text-decoration: underline;
    color: #fff !important; 
  }


</style>
