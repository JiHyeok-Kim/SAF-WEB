<template>
  <div id="app">
    <h1>App</h1>
    <Header />
    <Main />
  </div>
</template>

<script>
// App.vue에 import하기
import Header from "./components/Header";
import Main from "./components/Main";
export default {
// components 등록하기
components:{
    Header, 
    Main,
  }
};
</script>

<style>
</style>