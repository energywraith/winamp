import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import ClickOutside from "@/directives/click-outside";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(PerfectScrollbar);
app.directive("click-outside", ClickOutside);
app.mount("#app");
