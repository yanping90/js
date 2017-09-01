import Jquery from 'jquery'
import Css from './reset.css'
import Vue from 'vue'
import App from './App.vue'
import app1 from './APP1.vue'


new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue({
    el:"#app1",
    render:h => h(app1)
});
//(function(h){
//    return h(app1);
//});
