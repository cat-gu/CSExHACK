 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="dark">Is there any advice?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h3>Tips & Tricks</h3>
          </b-card-text>
          <b-card-text>{{ text1 }}</b-card-text>
          <hr class="hr"> 
          <b-card-text>{{ text2 }}</b-card-text>

        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Collapse from "bootstrap-vue/es/components/collapse";

export default {
  name: "faqadvice",
  data() {
    return {
      text1: 
      `There is no I in TEAM. So, remember to build a 
        good team with a variety of expertise so everyone 
        can share and learn from one another.
        Being friendly (not FRIENDS) is essencial for 
        collaboration in a Hackathon. Especially among 
        different teams. Remember, everyone is in the same boat: sink or swim.`,
        text2: 
      `FUCK FUUUUCK`
    };
  }
};
</script>


<style scoped>
    @import "../../../../src/assets/style/line-style.css";

</style>