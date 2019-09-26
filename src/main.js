import Vue from 'vue'
import App from './App.vue'
import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/MyWebComponent.vue';

const WrappedElement = wrap(Vue, MyWebComponent);

window.customElements.define('my-web-component', WrappedElement);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
