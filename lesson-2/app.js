const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Harry Potter",
      author: "J.K Rowling",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.info(e, e.type);
      if (data) {
        console.info(data);
      }
    },
    doubleClick() {
      alert("Clicked");
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount("#app");
