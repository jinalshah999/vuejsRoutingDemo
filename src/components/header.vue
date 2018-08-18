<template>
  <div>
    <ul class="nav nav-pills" >
      <li class="active"  role="presentation" >
        <router-link to="/" >Home</router-link>
      </li>
        <li role="presentation" >
        <router-link to="/product" >Product</router-link>
      </li>

    </ul>
    <!-- use below menu if you want to make use of active  -->
     <!-- <ul class="nav nav-pills" >
        <router-link exact active-class="active" tag="li" to="/" > <a>Home</a> </router-link>
        <router-link active-class="active" tag="li" to="/product"  ><a>Product</a></router-link>
     </ul> -->

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
