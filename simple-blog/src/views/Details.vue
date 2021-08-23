<template>
  <div v-if="post" class="post-detail">
    <div v-if="error">{{ error }}</div>
    <div class="post-title">
      <h3>{{ post.title }}</h3>
    </div>
    <div class="post-content">
      <p class="pre">{{ post.body }}</p>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    console.log(route);

    // const { post, error, load } = getPost(props.id);
    const { post, error, load } = getPost(route.params.id);
    load();
    return { post, error };
  },
};
</script>

<style>
.post-detail {
  max-width: 1200px;
  margin: 0 auto;
}
.post-title {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post-title h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post-title h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.post-detail.post-content p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
