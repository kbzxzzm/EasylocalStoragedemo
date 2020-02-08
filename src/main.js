// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import App from './App'

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
// data:{

// }
// })
new Vue({
  el: "#app",
  data: {
    title: "hello vuejs",
    subTitle: "vue react angluar all is good",
    item: [
      { text: "吃饭", done: false },
      { text: "睡觉", done: false },
      { text: "写代码", done: false }
    ],
    s1: ""
  },
  methods: {
    removelocal(){
    localStorage.removeItem('value')
    },
    handleclick() {
      this.title = "我变啦";
    },
    addstyle(i) {
      // console.log(i +1)
      this.item[i].done = !this.item[i].done;
    },
    setlocal() {
      var lo = this.item.push({ text: this.s1, done: false });
      localStorage.setItem("value", JSON.stringify(this.item));
      this.s1 = "";
    },
    getlocal() {
      if(localStorage.getItem('value')===null){
       localStorage.setItem('value',JSON.stringify(this.item))
      }
      var se = localStorage.getItem("value");
      this.item = JSON.parse(se);
    },
  },
  created() {
    this.getlocal();
  },
  watch: {}
});
