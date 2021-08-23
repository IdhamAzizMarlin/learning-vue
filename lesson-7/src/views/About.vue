<template>
  <div class="about">
    <h1>about</h1>
    <input type="text" v-model="search" />
    <p>search term : {{ search }}</p>
    <div v-for="name in matchingName" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "About",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "budi",
      "agus",
      "firman",
      "asep",
      "ujang",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch function");
    });

    const stopEffect = watchEffect(() => {
      console.log("watch effect run", search.value);
    });

    const handleClick = () => {
      stopWatch(), stopEffect();
    };

    const matchingName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingName, handleClick };
  },
};
</script>

<style></style>
