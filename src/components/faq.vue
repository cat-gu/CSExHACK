<template>
        <div class="container-fluid">
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
  },
};
</script>

<style scoped>
</style>