 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-4 variant="light">Can I sleepover in the venue?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h4>No</h4>
          </b-card-text>
          <hr class="hr">
          <b-card-text> {{ text1 }} </b-card-text>
          
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Collapse from "bootstrap-vue/es/components/collapse";

export default {
  name: "faqsleep",
  data() {
    return {
      text1: 
      `Unfortunately participants are not allowed to sleep in the venue. 
      The venue must be cleared before 10:00 pm. We start the next morning at 8:00am.`,
    };
  }
};
</script>

<style scoped>
@import "../../../../src/assets/style/line-style.css";
</style>