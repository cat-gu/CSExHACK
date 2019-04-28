<template>
        <div class="container-fluid">
            <div class="row">
                <div class='col-sm-3'></div>
                <div class="sectionTitle col-sm-6">
                    <h2>Frequently asked Questions</h2>
                </div>
                <div class='col-sm-3'></div>
            </div>

            <div class="col-sm-6 offset-3 sectionText" id="faq">
                <faqwhatishack/>
                <faqisfree/>
                <faqlanguage/>
                <faqsleep/>
                <faqadvice/>
                <faqfood/>
                <faqlinks/>
                <faqtest/>

            </div>
        </div>
</template>

<script>
import faqwhatishack from "./sub_components/faq-cards/faq-whatishack.vue";
import faqisfree from "./sub_components/faq-cards/faq-isfree.vue";
import faqlanguage from "./sub_components/faq-cards/faq-language.vue";
import faqsleep from "./sub_components/faq-cards/faq-sleep.vue";
import faqadvice from "./sub_components/faq-cards/faq-advice.vue";
import faqfood from "./sub_components/faq-cards/faq-food.vue";
import faqlinks from "./sub_components/faq-cards/faq-links.vue";
import faqtest from "./sub_components/faq-cards/faq-test.vue";
export default {
  name: "faq",
  components: {
    faqwhatishack,
    faqisfree,
    faqlanguage,
    faqsleep,
    faqadvice,
    faqfood,
    faqlinks,
    faqtest
  },
};
</script>

<style scoped>
</style>