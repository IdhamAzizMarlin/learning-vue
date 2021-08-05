const app = Vue.createApp({
  data() {
    return {
      title: "Harry Potter",
      author: "J.K Rowling",
      age: 45,
      text: "Hello, Vue",
      rawHtml: "<span style='color:red'>Ini Warna Merah</span>",
    };
  },
  methods: {
    changeTitle(value) {
      this.title = value;
      this.age = 0;
      this.author = "Idham Aziz Marlin";
    },
  },
});
app.mount("#app");
