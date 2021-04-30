<template>
  <div class="technology">
    <div class="info-table">
      <k-similar
        v-for="(topStories, index) in getAllNews"
        :key="index"
        :anecdote="topStories"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import KSimilar from "@/components/Similar.vue";

export default {
  name: "Technology",
  components: {
    KSimilar,
  },
  mounted() {
    console.log(this.$route);
    const {
      params: { category },
    } = this.$route;
    this.fetchAllNews({ category });
  },
  computed: {
    ...mapGetters(["getAllNews"]),
  },
  methods: {
    ...mapActions(["fetchAllNews"]),
  },
};
</script>

<style scoped>
.info-table {
  padding: 50px 0 0 0;
  max-width: 800px;
  display: block;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
}
</style>
