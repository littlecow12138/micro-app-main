import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "./assets/styles/locale.antd.css";
import startQiankun from "./micro";

Vue.config.productionTip = false;

Vue.use(Antd);

startQiankun();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
