<template>
  <div class="container-fluid">
    <div class="cat-welcome row">
      <div class="cat-title col-sm-4 offset-sm-1">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h1>CSE</h1>
              <h1>HACK</h1>
              <h2>10th-12th May, 2019</h2>
            </div>
          </div>
          <div class="row">
            <div class="cat-signup col-sm">
              <a
                class="btn btn-success btn-lg"
                v-bind:href="cat_data.register"
                target="_blank"
              >Click me to Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div class="cat-hackathon-defintion col-sm-6">
        <!-- <p style="color:red;">{{timeNow()}}</p> -->
        <p v-html="text.hackathon_description"></p>
      </div>
    </div>
    <div class="row">
      <sponsers></sponsers>
    </div>
  </div>
</template>

<script>
import cat_data from "@/assets/values/links.js";
import text from "@/assets/values/text.js";
import sponsers from "@/components/subcomponents/sponsers.vue";
export default {
  name: "Base",
  components: { sponsers },
  data() {
    return {
      cat_data: cat_data,
      text: text
    };
  },
  methods: {
    timeNow: function() {
      var endgame = new Date().getTime();
      return endgame;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anton|Inconsolata|Roboto+Slab");

.cat-welcome {
  background-color: black;
  color: white;
  height: 100vh;
}
.cat-welcome h1 {
  font-size: 10em;
}
.cat-welcome h2 {
  color: red;
}

.cat-title {
  font-family: "Roboto Slab", serif;
  padding: 5% 0 0 0;
}

.cat-signup {
  margin-top: 10vh;
}
.cat-hackathon-defintion p {
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;
  text-align: center;
  align-content: center;
  justify-content: center;
  padding: 20vh 5vw;
}
</style>