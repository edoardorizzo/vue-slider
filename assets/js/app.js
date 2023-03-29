const { createApp } = Vue

createApp({
  data() {
    return {
      activeImage: 0,
      movie: {
        title: 'Spider Man',
        category: 'Action',
        duration: 60,
        images: [
            "./assets/img/01.webp",
            "./assets/img/02.webp",
            "./assets/img/03.webp",
            "./assets/img/04.webp",
            "./assets/img/05.webp"
          ]
      }
    }
  },
}).mount('#app')