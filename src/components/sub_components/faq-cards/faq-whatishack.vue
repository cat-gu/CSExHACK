 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="dark">What is a Hackathon</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h3>In a nutshell:</h3>
          </b-card-text>
          <b-card-text>{{ text1 }}</b-card-text>
          <hr class="hr">
          <b-card-text>{{ text2 }}</b-card-text>
         <div class="row">
            <div class="col-sm-6">
                <p>
                    <b>THIS</b>
                </p>
                    <iframe src="https://www.youtube.com/embed/6VakF2hZFPQ" 
                    frameborder="0" 
                    allowfullscreen
                    width="250"
                    height="200">
                    </iframe>
            </div>

            <div class="col-sm-6">
                <p> 
                    <b>NOT THIS</b>
                </p>
                    <iframe src="https://www.youtube.com/embed/hqKafI7Amd8" 
                    frameborder="0" 
                    allowfullscreen
                    width="250"
                    height="200">
                    </iframe>
            </div>
                </div>

          <b-card-text> 
           The development happens throughout the entire 48 hours, 
           but you do not need to stay there the whole time... your competitor might. 😜        
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Collapse from "bootstrap-vue/es/components/collapse";

export default {
  name: "whatishack",
  data() {
    return {
      text1: `Hackathon is a 48 hour (non-stop) event where groups 
      of students engage in creative and development activities related to application development. 
      The goal is to hack data openly available in the Internet and then create an app using the data.`,
      text2: 
      `Basically you will be doing:`,
    
    };
  }
};
</script>


<style scoped>
@import "../../../../src/assets/style/line-style.css";
</style>