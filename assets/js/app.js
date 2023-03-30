const { createApp } = Vue

createApp({
  data() {
    return {
      activeImage: 0,
      movie: {
        title: [
          'Spider Man',
          'Rechet',
          'Fortnite',
          'Stray',
        ],
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
  methods: {
    next(){
      console.log('Next');
      this.activeImage++
      if(this.activeImage === this.movie.images.length){
        this.activeImage = 0
      }

    },
    prev(){
      console.log('Prev');
      this.activeImage--
      if (this.activeImage < 0) {
        this.activeImage = this.movie.images.length - 1
      }
    },
    changeImage(index){
      this.activeImage = index

    }
  },
  mounted(){
    setInterval(this.next, 2000)

  }
}).mount('#app')