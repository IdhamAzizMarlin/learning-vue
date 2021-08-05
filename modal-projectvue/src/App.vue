<template>
  <h1>{{ title }}</h1>
  <div>
    <button class="btn" @click.shift="toggleModal">Show Modal (shift)</button>
    <button class="btn" @click.ctrl="toggleModalTwo">
      Show Modal Two (ctrl)
    </button>
  </div>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">More Info</a>
      </template>
      <h1>Giveaway</h1>
      <p>Sign up for more discount</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">Login</a>
        <a href="#">Close</a>
      </template>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="name" placeholder="password" />
    </Modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App :)",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.btn {
  color: #fff;
  background: blue;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  font-weight: bold;
  cursor: pointer;
}
.btn:hover {
  color: #000;
  background: lightblue;
}
</style>
