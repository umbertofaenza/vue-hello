// Vue app
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World!",
      imageUrl: "./img/vuejs-logo.png",
    };
  },
}).mount("#app");
