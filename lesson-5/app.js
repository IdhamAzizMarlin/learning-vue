const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        { title: "Ketika Cinta Bertasbih", author: "Habbiburahman El SHirazy" },
        { title: "Sang Pemimpi", author: "Andrea Hirata" },
        { title: "Filosofi Kopi", author: "Dewi 'Dee' Lestari" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount("#app");
