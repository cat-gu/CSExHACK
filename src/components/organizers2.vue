<template>
  <div class="container-fluid">
    <gallery
      :images="images"
      :index="index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="index = null"
    ></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.poster + ')' ,width: '250px', height: '250px'}"
      
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [ //Not a good naming convention since there are videos in the array of objects here
        {
          title: "Ranim Khojah",
          href: "https://i.imgur.com/TuZf1W2.jpg",
          type: "text/html",
          poster: "https://i.imgur.com/TuZf1W2.jpg"
        },
        {
        title: "Filip Fatic",
        href: "https://i.imgur.com/rIbYpE7.png",
        type: "text/html",
        poster: "https://i.imgur.com/rIbYpE7.png",
        },
        {
        title: "Naief Jobsen",
        href: "https://i.imgur.com/eIwXJ4u.png",
        type: "text/html",
        poster: "https://i.imgur.com/eIwXJ4u.png",
        },
        {
        title: "Hanien Kobus",
        href: "https://i.imgur.com/tC4VCYC.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/tC4VCYC.jpg",
        },
        {
        title: "Oliver Manzi",
        href: "https://i.imgur.com/x2tyRHp.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/x2tyRHp.jpg",
        },
        {
        title: "Dimitris Platis",
        href: "https://i.imgur.com/udB6Bs3.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/udB6Bs3.jpg",
        },
        {
        title: "Fransisco Gomes",
        href: "https://i.imgur.com/RaObpLa.png",
        type: "text/html",
        poster: "https://i.imgur.com/RaObpLa.png",
        },
        {
        title: "Snezhena",
        href: "https://i.imgur.com/Bm4PabY.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/Bm4PabY.jpg",
        },
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: -10px 5px 60px 30px;
  
}
</style>




