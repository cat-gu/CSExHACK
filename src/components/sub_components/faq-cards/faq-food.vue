 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-6 variant="dark"
        >What is the food situation like? 
            <h class="font">(asking for a friend 🤓)</h>
            </b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h5>*In yoda voice* 
              IMPORTANT, food is.🍕🍕🍕</h5>
          </b-card-text>
          <b-card-text> {{ text1 }} </b-card-text>
          <hr class="hr">
          
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Collapse from "bootstrap-vue/es/components/collapse";

export default {
  name: "faqfood",
  data() {
    return {
      text1: `Food will be provided by the organizers. 
      You will be stuffed with pizza, candy and red bull until you tap out. 🍭🍫🍬`,
    };
  }
};
</script>


<style scoped>
@import "../../../../src/assets/style/line-style.css";

.font{
    font-size: 8pt;
}
</style>