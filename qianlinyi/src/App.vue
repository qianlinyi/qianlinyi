<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Kai', 'Times New Roman', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

a{
  text-decoration: none;
  color: #000000;
}

a:hover{
  color: #808080;
}

ul {
  padding-left: 10px;
}

/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
</style>
