<template>
  <div id="app">
    <div id="nav">
      <h1 class="logo">EmmanuelNews</h1>
      <!-- drop down  -->
      <!-- <div
        class="container col-6 d-flex justify-content-end align-items-center"
      >
        <select name="" class="drop-down">
          <option value=""></option>
          <option value="1">Home</option>
          <option value="1">Business</option>
          <option value="1">Entertainment</option>
          <option value="1">General</option>
          <option value="1">Health</option>
          <option value="1">Science</option>
          <option value="1">Sports</option>
          <option value="1">Technology</option>
        </select>
        <div class="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div> -->

      <!-- Drop end -->

      <Navbar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.logo {
  color: #add8e6;
  margin: 20px 0 0 150px;
}
/* .drop-down {
  margin: -40px 0 0 0;
}
.search-box {
  margin: -40px 0 0 0;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
