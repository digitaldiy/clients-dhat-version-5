import Vue from "vue";
import VueMaterial from "vue-material";
import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";
import "@/assets/code-highlight.css"
Vue.use(VueMaterial);


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'
  })
}
