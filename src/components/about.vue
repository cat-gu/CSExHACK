<template>
  <div>
    <div>
      <article class="previousHacks-titleGreen col-sm-14 offset-sm-0">
        <div>
        <h>Frequently Asked Questions - FAQ</h>
        </div>
        <hr class="hr"> 
      </article>
    </div>
    <faq/>

     <div>
      <article class="previousHacks-titleBlue col-sm-14 offset-sm-0">
        <div>
        <h>Organizers</h>
        </div>
        <hr class="hr"> 
      </article>
    </div>
    <organizers/>

    <div>
      <article class="previousHacks-titleRed col-sm-14 offset-sm-0">
        <div>
        <h>Gallery</h>
        </div>
        <hr class="hr"> 
      </article>
    </div>
    <gallery/>

  </div>
</template>

<script>
import Gallery from "./gallery.vue";
import organizers from "./organizers.vue";
import faq from "./faq.vue"
import text from "./../assets/values/text.js";
export default {
  name: "About",
  components: {
    Gallery,
    organizers,
    faq
  },
  data() {
    return {
      text: text
    };
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anton|Inconsolata|Roboto+Slab");

.previousHacks-titleRed {
  font-family: "Roboto Slab", serif;
  font-size: 50pt;
  padding: 3%;
  color: red;
}

.previousHacks-titleBlue {
  font-family: "Roboto Slab", serif;
  font-size: 50pt;
  padding: 3%;
  color: skyblue
}

.previousHacks-titleGreen {
  font-family: "Roboto Slab", serif;
  font-size: 50pt;
  padding: 3%;
  color: green;
}

.hr { 
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1px 0;
    padding: 0;
}
</style>
