<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tags" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  props: ["posts"],
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const tags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, tags, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
