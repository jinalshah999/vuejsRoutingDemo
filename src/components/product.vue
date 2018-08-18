<template>
  <div>
    <h1>hello from product component</h1>
    <button class="btn btn-primary"  @click="onClick()" >Back To Home</button>
     <button class="btn btn-primary"  @click="onProductDetails()" >Go To ProductDetails</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:10
    }
  },
methods:{
  onClick(){
    this.$router.push('/');
  },
  onProductDetails(){
    this.$router.push({path:`/productdetails/${this.id}`});
  }
}
}
</script>

<style>

</style>
