const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        {
          title: "Ketika Cinta Bertasbih",
          author: "Habbiburahman El Shirazy",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "Sang Pemimpi",
          author: "Andrea Hirata",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "Filosofi Kopi",
          author: "Dewi 'Dee' Lestari",
          img: "assets/3.jpg",
          isFav: true,
        },
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
