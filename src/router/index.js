import Vue from "vue";
import Router from "vue-router";
import base from "@/components/base.vue";
import schedule from "@/components/schedule.vue";
import cases from "@/components/cases.vue";
import terms from "@/components/terms.vue";
import about from "@/components/about.vue";
import faq from "@/components/faq.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Base",
      component: base
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: schedule
    },
    {
      path: "/cases",
      name: "Cases",
      component: cases
    },
    {
      path: "/terms",
      name: "Terms",
      component: terms
    },
    {
      path: "/faq",
      name: "FAQ",
      component: faq
    },
    {
      path: "/about",
      name: "About",
      component: about
    }
  ]
});
