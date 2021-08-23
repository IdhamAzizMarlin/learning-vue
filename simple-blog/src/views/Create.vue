<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="body">Body:</label>
        <textarea v-model="body"></textarea>
      </div>
      <div class="form-group">
        <label for="title">Tags (Hit enter to add a tag):</label>
        <input
          type="text"
          v-model="tag"
          @keydown.enter.prevent="handleKeyDown"
        />
        <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      </div>
      <button type="submit" class="add">Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();
    console.log(router);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); // remove all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
      console.log(tags.value);
    };

    const handleSubmit = async () => {
      const data = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      try {
        // simulate delay
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
          console.log(resolve);
        });

        let add = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!add.ok) {
          throw Error("Failed");
        }
        router.push({ name: "Home" });
      } catch (err) {
        error.value = err.message;
        console.log(err.message);
      }

      const settings = {
        methods: "POST",
        headers: { "Content-type": "application/json" },
      };

      if (title.value != "" && body.value != "") {
      }
    };

    return { title, body, tag, handleKeyDown, tags, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #d7d9f7;
}
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #ff8800;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -20px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
