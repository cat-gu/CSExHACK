<template>
  <div>
    <div class="container-fluid row">
      <article class="previousHacks-titleGreen col-sm-12 offset-sm-0">
        <div>
          <h>Frequently Asked Questions - FAQ</h>
        </div>
        <hr class="hr">
      </article>
    </div>
    <faq/>

    <div class="container-fluid row">
      <article class="previousHacks-titleBlue col-sm-12 offset-sm-0">
        <div>
          <h>Organizers</h>
        </div>
        <hr class="hr">
      </article>
    </div>
    <organizers2/>

    <div class="container-fluid row">
      <article class="previousHacks-titleRed col-sm-12 offset-sm-0">
        <div>
          <h>Gallery</h>
        </div>
        <hr class="hr">
      </article>
    </div>
    <gallery/>

    <div class="container-fluid">
      <article class="previousHacks-titleBlue col-sm-14 offset-sm-0"></article>
    </div>
  </div>
</template>

<script>
import Gallery from "./gallery.vue";
import organizers2 from "./organizers2.vue";
import faq from "./faq.vue";
import text from "./../assets/values/text.js";
export default {
  name: "About",
  components: {
    Gallery,
    organizers2,
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
  color: skyblue;
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

.transparentLine {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgb(200, 0, 0);
  margin: 1px 0;
  padding: 0;
}
</style>
