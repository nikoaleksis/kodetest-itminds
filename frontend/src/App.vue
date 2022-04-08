<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item"><router-link :to="{name: 'Home'}">Engagements</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'Home'}">Microsoft 2021</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'Notes'}">Review Notes</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background: #fff;
  background-attachment: fixed;
}
main {
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
  display: flex;
}
header {
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
}
</style>
