<template>
  <div>
    <h1>Header</h1>
    <Search />
    <Navigation />
  </div>  
</template>

<script>
import Search from "./Search";
import Navigation from "./Navigation";
export default {
// components 등록하기
components:{
    Search,
    Navigation,
  }
};
</script>

<style scoped>

</style>