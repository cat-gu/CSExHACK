 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="dark">Do I need to speak Swedish?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h4>Swedish? Portugues? English? Kinyarwanda? Arabic?</h4>
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
  name: "faqlanguage",
  data() {
    return {
      text1: 
      `You can speak whatever language you want within your team. 
      However, presentations will be done in english... and so will 
      most of the mingling.`,
    };
  }
};
</script>

<style scoped>
@import "../../../../src/assets/style/line-style.css";
</style>