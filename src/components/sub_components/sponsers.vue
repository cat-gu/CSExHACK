<template>
  <div class="cat-sponser container-fluid">
    <div class="row">
      <div class="cat-header col-sm">
        <h1>Our themes this year</h1>
      </div>
    </div>
    <div class="cat-theme row">
      <div class="cat-theme-logo col-sm-4">
        <img style="height:30vh;" src="@/assets/img/sponsers/ericsson.jpg" alt="Ericsson logo">
      </div>
      <div class="cat-theme-content col-sm-8">
        <h1>{{text.theme1.title}}</h1>
        <h3>Partner: {{text.theme1.partner}}</h3>
        <p>{{text.theme1.body}}</p>
      </div>
    </div>
    <div class="cat-theme row">
      <div class="cat-theme-logo col-sm-4">
        <img style="height: 10vh;" src="@/assets/img/sponsers/openhack.png" alt="Openhack logo">
      </div>
      <div class="cat-theme-content col-sm-8">
        <h1>{{text.theme2.title}}</h1>
        <h3>Partner: {{text.theme2.partner}}</h3>
        <p>{{text.theme2.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ericssonImg from "@/assets/img/sponsers/ericsson.jpg";
import text from "@/assets/values/text.js";
export default {
  name: "sponsers",
  data: function() {
    return {
      text: text
    };
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Anton|Inconsolata|Roboto+Slab");
:root {
  --header-font: "Roboto Slab", serif;
  --body-font: "Inconsolata", monospace;
}
.cat-sponser {
  background-color: white;
  height: 150vh;
  position: relative;
}
.cat-header > h1 {
  font-family: var(--header-font, "Roboto Slab", serif);
  font-size: 4em;
  text-align: center;

  padding: 5vh 5vw;
}

.cat-theme {
  margin: 10vh 5vw;
  padding: 5vh 5vw;
}

.cat-theme-content > h1 {
  font-family: var(--header-font, "Roboto Slab", serif);
  font-weight: bold;
  font-size: 3em;
}

.cat-theme-content p {
  font-family: var(--body-font, "Inconsolata", monospace);
}

.cat-theme-logo img {
  height: 20vh;
  width: auto;
  padding-right: 10vw;
}
</style>

