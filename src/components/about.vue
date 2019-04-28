<template>
  <div>
    <section>
      <article class="cat-title col-sm-6 offset-sm-5">
        <h1>The Principles of Good Design</h1>
      </article>
    </section>

    <gallery/>
  </div>
</template>

<script>
import Gallery from "./gallery.vue";
import text from "./../assets/values/text.js";
export default {
  name: "About",
  components: {
    Gallery
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

.cat-title {
  font-family: "Roboto Slab", serif;
  padding: 5% 0%;
}
</style>
