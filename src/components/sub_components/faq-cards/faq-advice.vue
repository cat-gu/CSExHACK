 <template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-5 variant="dark">Is there any advice?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <h3>Tips & Tricks</h3>
          </b-card-text>
          <b-card-text>{{ text1 }}</b-card-text>
          <hr class="hr">
          <b-card-text>{{ text2 }}</b-card-text>
          <hr class="hr">
          <b-card-text> 
              Delegating tasks is important. Explore everyone's unique capabilities: Divide and conquer!
          Try to assign different responsibilities, for instance:
          
          <li>Coding: Front-end, back-end, ripping data from websites</li>
          <li> Pitching the idea (slides, catch phrases), designing the interface</li> 
          Dev. 
          <li> Using tools (git, APIs, etc.) properly, track time and goals, talk with organization</li>              
          </b-card-text>
          <hr class="hr">
        
          <li>There are lots of tips on winning and enjoying Hackathon. Here is 
              <a href="https://goo.gl/goXESf" target="_blank"> 
              <hlt>one, </hlt>
              </a> this is
              <a href="https://hackathon.guide/" target="_blank">
              <hlt>another</hlt>
              </a>, or you
              <a href="http://lmgtfy.com/?q=how+to+win+a+hackathon" target="_blank">
              <hlt>simply do this</hlt>.
              </a>
              <p></p>
              <p>Above all: Be fun, creative and learn lots of new stuff (technical and personal).</p>
              </li>
        


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
      text1: `There is no I in TEAM. So, remember to build a 
        good team with a variety of expertise so everyone 
        can share and learn from one another.
        Being friendly (not FRIENDS) is essencial for 
        collaboration in a Hackathon. Especially among 
        different teams. Remember, everyone is in the same boat: sink or swim.`,
      text2: 
      `You can come with a team of yours or meet people and join/form 
        teams in our brainstorming evening. Remember that they have to be CSE students.`,
    
    };
  }
};
</script>


<style scoped>
@import "../../../../src/assets/style/line-style.css";
</style>