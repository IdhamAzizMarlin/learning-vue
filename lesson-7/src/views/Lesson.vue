<template>
  <div class="lesson">
    <h1>Lesson</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Lesson",
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Lorem ipsum dolor sir amet",
        id: 1,
      },
      {
        title: "Tutorial Vue JS 3",
        body: "Lorem ipsum",
        id: 2,
      },
    ]);

    return { posts };
  },
};
</script>

<style></style>
