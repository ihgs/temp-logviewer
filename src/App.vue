<template>
  <div id="app">
    <b-nav>
      <b-nav-item href="#/regexp">Register RegExp</b-nav-item>
      <b-nav-item href="#/">Parse Log</b-nav-item>
    </b-nav>
    <div class="contents">
      <router-view/>
    </div>
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
  color: #2c3e50;
}

.title {
  font-size: 25px;
}

.contents {
  padding-left: 30px;
  padding-right: 30px;
}

.error {
  color: red;
}
</style>
