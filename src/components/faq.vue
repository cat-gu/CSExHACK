<template>
  <div class="cat-faq container-fluid">
    <div class="row">
      <div class="cat-title col-sm">
        <h1>Frequently Asked Questions</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-10 offset-sm-1">
        <div class="cat-faq-card" v-for="faq in faqs" v-bind:key="faq.question">
          <b-card bg-variant="light" text-variant="black" :title="faq.question">
            <b-card-text>
              <p v-html="faq.answer"></p>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import text from "@/assets/values/text.js";
export default {
  name: "faq",
  data: function() {
    return {
      faqs: text.faq
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anton|Inconsolata|Roboto+Slab");

.cat-faq {
  color: white;
  height: 150vh;
}

.cat-title {
  font-family: "Roboto Slab", serif;
  text-align: center;
  padding: 10vh 5vw;
}

.cat-faq-card {
  color: black;
  padding: 1vh 0vw;
}

b-card {
  color: red;
}
</style>