<template>
  <div class="container" >
    <h1>from product details</h1>
    <h1>{{id}}</h1>

  </div>
</template>

<script>
export default {
data(){
  return{
    id:this.$route.params.id
  }
}
}
</script>

<style>

</style>
