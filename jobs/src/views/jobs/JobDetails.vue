<template>
  <div class="job-detail-container" v-if="job">
    <div class="job-detail-title">
      <h1>{{ job.title }} #{{ id }}</h1>
    </div>
    <div class="job-detail-content">
      <p>{{ job.details }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading Job Data</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
