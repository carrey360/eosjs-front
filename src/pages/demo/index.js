import Vue from 'vue'
import router from '@/router/demo'
import Demo from './demo'
import VueScroller from 'vue-scroller'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import vuex from 'vuex'
import i18n from './i18n'
Vue.use(VueScroller)
Vue.config.productionTip = false

// 配置修改标题的钩子
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

/**
 * 初始化vue对象
 */
let vRouter = new Vue({
  el: '#app', // 根节点元素
  router, // 路由信息
  i18n, // 国际化
  template: '<Demo/>', // 模版信息
  components: { Demo } // 组件信息
})

Vue.user({vRouter})
