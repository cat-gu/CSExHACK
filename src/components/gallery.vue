<template>
  <div class="container-fluid row" >
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
      :style="{ backgroundImage: 'url(' + image.poster + ')' ,width: '350px', height: '250px'}"
      
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
        href: "https://i.imgur.com/wi79lJX.jpg",
        poster: "https://i.imgur.com/wi79lJX.jpg",
        },
        {
        href: "https://i.imgur.com/fInpDmR.jpg",
        poster: "https://i.imgur.com/fInpDmR.jpg",
        },
        {
        href: "https://i.imgur.com/AbRIXkC.jpg",
        poster: "https://i.imgur.com/AbRIXkC.jpg",
        },
        {
        href: "https://i.imgur.com/OOgrxpg.jpg",
        poster: "https://i.imgur.com/OOgrxpg.jpg",
        },
        {
        href: "https://i.imgur.com/zl4WtzV.jpg",
        poster: "https://i.imgur.com/zl4WtzV.jpg",
        },
        {
        href: "https://i.imgur.com/bypbJjF.jpg",
        poster: "https://i.imgur.com/bypbJjF.jpg",
        },
        {
        href: "https://i.imgur.com/wrLn7ia.jpg",
        poster: "https://i.imgur.com/wrLn7ia.jpg",
        },
        {
        href: "https://i.imgur.com/mRKK9Kp.jpg",
        poster: "https://i.imgur.com/mRKK9Kp.jpg",
        },
        {
        href: "https://i.imgur.com/IpPjI3Z.jpg",
        poster: "https://i.imgur.com/IpPjI3Z.jpg",
        },
        {
        href: "https://i.imgur.com/a0vdxzm.jpg",
        poster: "https://i.imgur.com/a0vdxzm.jpg",
        },
        {
        href: "https://i.imgur.com/G0VQqSP.jpg",
        poster: "https://i.imgur.com/G0VQqSP.jpg",
        },
        {
        href: "https://i.imgur.com/JaDQDJI.jpg",
        poster: "https://i.imgur.com/JaDQDJI.jpg",
        },
        {
        href: "https://i.imgur.com/LNCWGC2.jpg",
        poster: "https://i.imgur.com/LNCWGC2.jpg",
        },
        {
        href: "https://i.imgur.com/sujjbSu.jpg",
        poster: "https://i.imgur.com/sujjbSu.jpg",
        },
        {
        href: "https://i.imgur.com/rhTtwLJ.jpg",
        poster: "https://i.imgur.com/rhTtwLJ.jpg",
        },
        {
        href: "hhttps://i.imgur.com/bX9j8lZ.jpg",
        poster: "https://i.imgur.com/bX9j8lZ.jpg",
        },
        {
        href: "https://i.imgur.com/49VKTS0.jpg",
        poster: "https://i.imgur.com/49VKTS0.jpg",
        },



        {
        href: "https://i.imgur.com/QLUUWOK.jpg",
        poster: "https://i.imgur.com/QLUUWOK.jpg",
        },{
        href: "https://i.imgur.com/71clbeP.jpg",
        poster: "https://i.imgur.com/71clbeP.jpg",
        },{
        href: "https://i.imgur.com/igL3Ge7.jpg",
        poster: "https://i.imgur.com/igL3Ge7.jpg",
        },{
        href: "https://i.imgur.com/49VKTS0.jpg",
        poster: "https://i.imgur.com/W6W8Aot.jpg",
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



https://i.imgur.com/c7Ex0aM.jpg
https://i.imgur.com/rOnWtdr.jpg
https://i.imgur.com/A1KsQA8.jpg
https://i.imgur.com/v9eBeaR.jpg
https://i.imgur.com/Od9AuCL.jpg
https://i.imgur.com/Xwb8sod.jpg
https://i.imgur.com/Cqr5xGO.jpg
https://i.imgur.com/iCPCyAb.jpg
https://i.imgur.com/8R8q2mK.jpg
https://i.imgur.com/Gk1G4KS.jpg
https://i.imgur.com/FVac53R.jpg
https://i.imgur.com/uJWIYXU.jpg
https://i.imgur.com/mskeJyN.jpg
https://i.imgur.com/Y1iwGcx.jpg
https://i.imgur.com/EdnEoRT.jpg
https://i.imgur.com/CqzMZXU.jpg
https://i.imgur.com/ITqHJEp.jpg
https://i.imgur.com/9kDSYZ7.jpg
https://i.imgur.com/THQfMx5.jpg
https://i.imgur.com/yeghQHs.jpg
https://i.imgur.com/a4YXUlo.jpg
https://i.imgur.com/Yz8OfE1.jpg
https://i.imgur.com/Jp6T7Ac.jpg
https://i.imgur.com/Q36Sgsb.jpg
https://i.imgur.com/UPmbDBj.jpg
https://i.imgur.com/gGAnXJv.jpg
https://i.imgur.com/LGd3kHT.jpg
https://i.imgur.com/LjQ67E0.jpg
https://i.imgur.com/GPizSvy.jpg
https://i.imgur.com/nGilBum.jpg
https://i.imgur.com/8PzCoHl.jpg
https://i.imgur.com/vOODjdW.jpg
https://i.imgur.com/SwDcjro.jpg
https://i.imgur.com/6NcOdOp.jpg
https://i.imgur.com/QSzRSXW.jpg
https://i.imgur.com/Dv8kGH3.jpg
https://i.imgur.com/kfyL8Xw.jpg
https://i.imgur.com/mFBDzap.jpg
https://i.imgur.com/MzrXuXj.jpg
https://i.imgur.com/qBHHOoN.jpg
https://i.imgur.com/MaqvOEg.jpg
https://i.imgur.com/iyB9RuG.jpg
https://i.imgur.com/tg9FFJB.jpg
https://i.imgur.com/wbpLRea.jpg
https://i.imgur.com/vnrAsjp.jpg
https://i.imgur.com/AjOy7Np.jpg
https://i.imgur.com/8bPtI7l.jpg
https://i.imgur.com/L4eA5NX.jpg
https://i.imgur.com/ulU0gRC.jpg
https://i.imgur.com/OEUnfor.jpg
https://i.imgur.com/5TuwIUa.jpg
https://i.imgur.com/nDG4ByJ.jpg
https://i.imgur.com/PrqzlhW.jpg
