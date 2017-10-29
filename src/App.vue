<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  padding-top: 60px;
  box-sizing: border-box;
}
button {
  height: 50px;
  padding: 0 15px;
  margin: 10px 0;
  font-size: 16px;
  border-width: 1px;
  border-style: solid;
  background: transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
