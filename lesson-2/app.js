const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Harry Potter",
      author: "J.K Rowling",
      age: 45,
    };
  },
  methods: {
    changeTitle(value) {
      this.title = value;
      this.age = 0;
      this.author = "Idham Aziz Marlin";
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount("#app");
