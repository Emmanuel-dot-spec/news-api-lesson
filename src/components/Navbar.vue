<template>
  <div class="nav">
    <ul>
      <li>
        <router-link :to="{ name: 'Home', params: { category: '' } }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Business', params: { category: 'business' } }"
          >Business</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Entertainment', params: { category: 'entertainment' } }"
          >Entertainment</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'General', params: { category: 'general' } }"
          >General</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Health', params: { category: 'health' } }"
          >Health</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Science', params: { category: 'science' } }"
          >Science</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Sports', params: { category: 'sports' } }"
          >Sports</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Technology', params: { category: 'technology' } }"
          >Technology</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #add8e6;
  margin-top: 30px;
}
.nav ul {
  display: flex;
  list-style: none;
}
.nav ul li {
  margin-left: 50px;
}
.nav ul li a {
  color: #2c3e50;
  font-size: 18px;
  text-decoration: none;
}
.nav ul li a:hover {
  color: #fff;
}
</style>
