<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <!-- <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">Update Person</button>
    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update person 2</button> -->
    <p ref="p">My Name is {{ name }} and my age is {{ age }}</p>
    <button @click="age++">Add age</button>
    <button @click="handleClick">Click Me</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// @ is an alias to /src
export default {
  name: "Home",
  setup() {
    const personOne = ref({ name: "marion", age: 30 });
    const personTwo = reactive({ name: "luigi", age: 35 });
    // const name = ref("amel");
    // const age = ref(20);

    const updatePersonOne = () => {
      personOne.value.age = 50;
      personOne.value.name = "amel";
    };

    const updatePersonTwo = () => {
      personTwo.age = 10;
      personTwo.name = "agus";
    };

    const handleClick = () => {
      // name.value = "marion";
      // age.value = 30;
      // p.value.classList.add("test");
      // p.value.textContent = `Hello ${name}`;
    };

    return { personOne, personTwo, updatePersonOne, updatePersonTwo };
  },
};
</script>
