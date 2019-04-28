 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="dark">Is it free?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h5>Nothing in this world is free... 🙁</h5>
          </b-card-text>
          <b-card-text> <h3>{{ text1 }} </h3></b-card-text>
          <hr class="hr">
          
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Collapse from "bootstrap-vue/es/components/collapse";

export default {
  name: "faqisfree",
  data() {
    return {
      text1: `But the CSE Hackathon is absolutely free! 💸💰`,
    };
  }
};
</script>


<style scoped>
@import "../../../../src/assets/style/line-style.css";
</style>