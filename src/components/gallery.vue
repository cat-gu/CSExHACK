<template>
  <div class="container-fluid row">
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
      :style="{ backgroundImage: 'url(' + image.poster + ')' ,width: '350px', height: '280px'}"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [
        //Not a good naming convention since there are videos in the array of objects here
        {
          href: "https://i.imgur.com/wi79lJX.jpg",
          poster: "https://i.imgur.com/wi79lJX.jpg"
        },
        {
          href: "https://i.imgur.com/fInpDmR.jpg",
          poster: "https://i.imgur.com/fInpDmR.jpg"
        },
        {
          href: "https://i.imgur.com/AbRIXkC.jpg",
          poster: "https://i.imgur.com/AbRIXkC.jpg"
        },
        {
          href: "https://i.imgur.com/OOgrxpg.jpg",
          poster: "https://i.imgur.com/OOgrxpg.jpg"
        },
        {
          href: "https://i.imgur.com/zl4WtzV.jpg",
          poster: "https://i.imgur.com/zl4WtzV.jpg"
        },
        {
          href: "https://i.imgur.com/bypbJjF.jpg",
          poster: "https://i.imgur.com/bypbJjF.jpg"
        },
        {
          href: "https://i.imgur.com/wrLn7ia.jpg",
          poster: "https://i.imgur.com/wrLn7ia.jpg"
        },
        {
          href: "https://i.imgur.com/mRKK9Kp.jpg",
          poster: "https://i.imgur.com/mRKK9Kp.jpg"
        },
        {
          href: "https://i.imgur.com/IpPjI3Z.jpg",
          poster: "https://i.imgur.com/IpPjI3Z.jpg"
        },
        {
          href: "https://i.imgur.com/a0vdxzm.jpg",
          poster: "https://i.imgur.com/a0vdxzm.jpg"
        },
        {
          href: "https://i.imgur.com/G0VQqSP.jpg",
          poster: "https://i.imgur.com/G0VQqSP.jpg"
        },
        {
          href: "https://i.imgur.com/JaDQDJI.jpg",
          poster: "https://i.imgur.com/JaDQDJI.jpg"
        },
        {
          href: "https://i.imgur.com/LNCWGC2.jpg",
          poster: "https://i.imgur.com/LNCWGC2.jpg"
        },
        {
          href: "https://i.imgur.com/sujjbSu.jpg",
          poster: "https://i.imgur.com/sujjbSu.jpg"
        },
        {
          href: "https://i.imgur.com/rhTtwLJ.jpg",
          poster: "https://i.imgur.com/rhTtwLJ.jpg"
        },
        {
          href: "hhttps://i.imgur.com/bX9j8lZ.jpg",
          poster: "https://i.imgur.com/bX9j8lZ.jpg"
        },
        {
          href: "https://i.imgur.com/49VKTS0.jpg",
          poster: "https://i.imgur.com/49VKTS0.jpg"
        },
        {
          href: "https://i.imgur.com/QLUUWOK.jpg",
          poster: "https://i.imgur.com/QLUUWOK.jpg"
        },
        {
          href: "https://i.imgur.com/71clbeP.jpg",
          poster: "https://i.imgur.com/71clbeP.jpg"
        },
        {
          href: "https://i.imgur.com/igL3Ge7.jpg",
          poster: "https://i.imgur.com/igL3Ge7.jpg"
        },
        {
          href: "https://i.imgur.com/49VKTS0.jpg",
          poster: "https://i.imgur.com/W6W8Aot.jpg"
        },
        {
          href: "https://i.imgur.com/Od9AuCL.jpg",
          poster: "https://i.imgur.com/Od9AuCL.jpg"
        },
        {
          href: "https://i.imgur.com/49VKTS0.jpg",
          poster: "https://i.imgur.com/49VKTS0.jpg"
        },
        {
          href: "https://i.imgur.com/OEUnfor.jpg",
          poster: "https://i.imgur.com/OEUnfor.jpg"
        },
        {
          href: "https://i.imgur.com/rOnWtdr.jpg",
          poster: "https://i.imgur.com/rOnWtdr.jpg"
        },
        {
          href: "https://i.imgur.com/a4YXUlo.jpg",
          poster: "https://i.imgur.com/a4YXUlo.jpg"
        },
        {
          href: "https://i.imgur.com/Jp6T7Ac.jpg",
          poster: "https://i.imgur.com/Jp6T7Ac.jpg"
        },
        {
          href: "https://i.imgur.com/Xwb8sod.jpg",
          poster: "https://i.imgur.com/Xwb8sod.jpg"
        },
        {
          href: "https://i.imgur.com/L4eA5NX.jpg",
          poster: "https://i.imgur.com/L4eA5NX.jpg"
        },
        {
          href: "https://i.imgur.com/UPmbDBj.jpg",
          poster: "https://i.imgur.com/UPmbDBj.jpg"
        },
        {
          href: "https://i.imgur.com/9kDSYZ7.jpg",
          poster: "https://i.imgur.com/9kDSYZ7.jpg"
        },
        {
          href: "https://i.imgur.com/MaqvOEg.jpg",
          poster: "https://i.imgur.com/MaqvOEg.jpg"
        },
        {
          href: "https://i.imgur.com/PrqzlhW.jpg",
          poster: "https://i.imgur.com/PrqzlhW.jpg"
        },
        {
          href: "https://i.imgur.com/v9eBeaR.jpg",
          poster: "https://i.imgur.com/v9eBeaR.jpg"
        },
        {
          href: "https://i.imgur.com/AjOy7Np.jpg",
          poster: "https://i.imgur.com/AjOy7Np.jpg"
        },
        {
          href: "https://i.imgur.com/uJWIYXU.jpg",
          poster: "https://i.imgur.com/uJWIYXU.jpg"
        },
        {
          href: "https://i.imgur.com/iCPCyAb.jpg",
          poster: "https://i.imgur.com/iCPCyAb.jpg"
        },
        {
          href: "https://i.imgur.com/5TuwIUa.jpg",
          poster: "https://i.imgur.com/5TuwIUa.jpg"
        },
        {
          href: "https://i.imgur.com/Gk1G4KS.jpg",
          poster: "https://i.imgur.com/Gk1G4KS.jpg"
        },
        {
          href: "https://i.imgur.com/qBHHOoN.jpg",
          poster: "https://i.imgur.com/qBHHOoN.jpg"
        },
        {
          href: "https://i.imgur.com/ulU0gRC.jpg",
          poster: "https://i.imgur.com/ulU0gRC.jpg"
        },
        {
          href: "https://i.imgur.com/nDG4ByJ.jpg",
          poster: "https://i.imgur.com/nDG4ByJ.jpg"
        },
        {
          href: "https://i.imgur.com/Yz8OfE1.jpg",
          poster: "https://i.imgur.com/Yz8OfE1.jpg"
        },
        {
          href: "https://i.imgur.com/Cqr5xGO.jpg",
          poster: "https://i.imgur.com/Cqr5xGO.jpg"
        },
        {
          href: "https://i.imgur.com/vnrAsjp.jpg",
          poster: "https://i.imgur.com/vnrAsjp.jpg"
        },
        {
          href: "https://i.imgur.com/Y1iwGcx.jpg",
          poster: "https://i.imgur.com/Y1iwGcx.jpg"
        },
        {
          href: "https://i.imgur.com/yeghQHs.jpg",
          poster: "https://i.imgur.com/yeghQHs.jpg"
        },
        {
          href: "https://i.imgur.com/Dv8kGH3.jpg",
          poster: "https://i.imgur.com/Dv8kGH3.jpg"
        },
        {
          href: "https://i.imgur.com/FVac53R.jpg",
          poster: "https://i.imgur.com/FVac53R.jpg"
        },
        {
          href: "https://i.imgur.com/8bPtI7l.jpg",
          poster: "https://i.imgur.com/8bPtI7l.jpg"
        },
        {
          href: "https://i.imgur.com/8PzCoHl.jpg",
          poster: "https://i.imgur.com/8PzCoHl.jpg"
        },
        {
          href: "https://i.imgur.com/mskeJyN.jpg",
          poster: "https://i.imgur.com/mskeJyN.jpg"
        },
        {
          href: "https://i.imgur.com/wbpLRea.jpg",
          poster: "https://i.imgur.com/wbpLRea.jpg"
        },
        {
          href: "https://i.imgur.com/CqzMZXU.jpg",
          poster: "https://i.imgur.com/CqzMZXU.jpg"
        },
        {
          href: "https://i.imgur.com/gGAnXJv.jpg",
          poster: "https://i.imgur.com/gGAnXJv.jpg"
        },
        {
          href: "https://i.imgur.com/kfyL8Xw.jpg",
          poster: "https://i.imgur.com/kfyL8Xw.jpg"
        },
        {
          href: "https://i.imgur.com/ITqHJEp.jpg",
          poster: "https://i.imgur.com/ITqHJEp.jpg"
        },
        {
          href: "https://i.imgur.com/iyB9RuG.jpg",
          poster: "https://i.imgur.com/iyB9RuG.jpg"
        },
        {
          href: "https://i.imgur.com/MzrXuXj.jpg",
          poster: "https://i.imgur.com/MzrXuXj.jpg"
        },
        {
          href: "https://i.imgur.com/c7Ex0aM.jpg",
          poster: "https://i.imgur.com/c7Ex0aM.jpg"
        },
        {
          href: "https://i.imgur.com/vOODjdW.jpg",
          poster: "https://i.imgur.com/vOODjdW.jpg"
        },
        {
          href: "https://i.imgur.com/LjQ67E0.jpg",
          poster: "https://i.imgur.com/LjQ67E0.jpg"
        },
        {
          href: "https://i.imgur.com/LGd3kHT.jpg",
          poster: "https://i.imgur.com/LGd3kHT.jpg"
        },
        {
          href: "https://i.imgur.com/mFBDzap.jpg",
          poster: "https://i.imgur.com/mFBDzap.jpg"
        },
        {
          href: "https://i.imgur.com/SwDcjro.jpg",
          poster: "https://i.imgur.com/SwDcjro.jpg"
        },
        {
          href: "https://i.imgur.com/THQfMx5.jpg",
          poster: "https://i.imgur.com/THQfMx5.jpg"
        },
        {
          href: "https://i.imgur.com/GPizSvy.jpg",
          poster: "https://i.imgur.com/GPizSvy.jpg"
        },
        {
          href: "https://i.imgur.com/6NcOdOp.jpg",
          poster: "https://i.imgur.com/6NcOdOp.jpg"
        },

        {
          href: "https://i.imgur.com/tg9FFJB.jpg",
          poster: "https://i.imgur.com/tg9FFJB.jpg"
        },
        {
          href: "https://i.imgur.com/nGilBum.jpg",
          poster: "https://i.imgur.com/nGilBum.jpg"
        },
        {
          href: "https://i.imgur.com/Q36Sgsb.jpg",
          poster: "https://i.imgur.com/Q36Sgsb.jpg"
        },
        {
          href: "https://i.imgur.com/QSzRSXW.jpg",
          poster: "https://i.imgur.com/QSzRSXW.jpg"
        }
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



