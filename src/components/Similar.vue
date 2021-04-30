<template>
  <div>
    <div class="article_container">
      <div class="info-origin">
        <h1>{{ anecdote.source.name }}</h1>
      </div>
      <div class="info-subject">
        <h2>{{ anecdote.title }}</h2>
      </div>
      <div class="info-details">
        <p>{{ anecdote.content }}</p>
      </div>
      <div class="info-redirect">
        <a
          :href="anecdote.url"
          target="_blank"
          rel="nonreferer noopener"
          class="info-btn"
          >Findout more
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Similar",
  props: {
    anecdote: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.article_container {
  margin-right: 80px;
  margin-bottom: 50px;
  width: 400px;
}
.info-origin {
  font-size: 12px;
  color: #add8e6;
  padding-bottom: 20px;
}
.info-subject {
  font-size: 5px;
}
.info-details {
  font-size: 14px;
  padding-bottom: 15px;
}
.info-redirect {
  margin-top: 20px;
}
.info-btn {
  background: #add8e6;
  padding: 4px;
  color: #fff;
  border: 1px solid #add8e6;
  cursor: pointer;
  text-decoration: none;
}
</style>
