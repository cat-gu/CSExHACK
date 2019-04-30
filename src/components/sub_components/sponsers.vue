<template>
  <div class="cat-sponser container-fluid">
    <div class="cat-theme row">
      <div class="col-sm-8">
        <h1>{{text.theme1.title}}</h1>
        <h3>Partner: {{text.theme1.partner}}</h3>
        <p>{{text.theme1.body}}</p>
      </div>
      <div class="col-sm-4">
        <img class="cat-theme-logo" src="@/assets/img/sponsers/ericsson.jpg" alt="Ericsson logo">
      </div>
    </div>
    <div class="cat-theme row">
      <div class="col-sm-4">
        <img
          class="cat-theme-logo"
          style="height: 10vh;"
          src="@/assets/img/sponsers/openhack.png"
          alt="Openhack logo"
        >
      </div>
      <div class="col-sm-8">
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
.cat-sponser {
  background-color: white;
  height: 110vh;
}

.cat-theme-logo {
  height: 20vh;
  width: auto;
}
</style>

