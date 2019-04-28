<template>
  <div>
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
      :style="{ backgroundImage: 'url(' + image.poster + ')' ,width: '590px', height: '350px'}"
      
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
        title: "Dummy Pic",
        href: "https://i.imgur.com/H9dTdSI.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/H9dTdSI.jpg",
        },
        {
          title: "A YouYube video",
          href: "https://www.youtube.com/watch?v=hNdlUHBJDKs",
          type: "text/html",
          youtube: "hNdlUHBJDKs",
          poster: "https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg"
        },
        {
        title: "Dummy Pic",
        href: "https://i.imgur.com/H9dTdSI.jpg",
        type: "text/html",
        poster: "https://i.imgur.com/H9dTdSI.jpg",
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
  margin: -10px 10px 60px 30px;
  
}
</style>