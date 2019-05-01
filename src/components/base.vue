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
        <h3>TIME LEFT:</h3>
        <p id="countdown" style="color:red;">{{ timeRemaining }}</p>
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
import sponsers from "@/components/sub_components/sponsers.vue";
export default {
  name: "Base",
  components: { sponsers /* , countdown */ },
  data() {
    return {
      cat_data: cat_data,
      text: text,
      timeRemaining: ""
    };
  },
  methods: {
    countdown() {
      var deadline = "May 10 2019 12:00:00 GMT+0200";
      var remaining = Date.parse(deadline) - Date.parse(new Date());
      var days = Math.floor(remaining / (1000 * 60 * 60 * 24)).toLocaleString(
        undefined,
        { minimumIntegerDigits: 2 }
      );
      var hours = Math.floor(
        (remaining / (1000 * 60 * 60)) % 24
      ).toLocaleString(undefined, { minimumIntegerDigits: 2 });
      var minutes = Math.floor((remaining / (1000 * 60)) % 60).toLocaleString(
        undefined,
        { minimumIntegerDigits: 2 }
      );
      var seconds = Math.floor((remaining / 1000) % 60).toLocaleString(
        undefined,
        { minimumIntegerDigits: 2 }
      );
      this.timeRemaining =
        days +
        "d : " +
        hours +
        "h : " +
        minutes +
        "m : " +
        seconds +
        "s";
    }
  },
  mounted() {
    var self = this;
    setInterval(function() {
      self.countdown();
    }, 1000);
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
  padding: 8vh 5vw;
}

#countdown {
  font-size: 5vh;
  font-weight: bolder;
  padding-top: 0vh;
  padding-bottom: 0vh;
}

h3 {
  color: red;
  font-size: 2vh;
  text-align: center;
  padding-top: 10vh;
}
</style>