import Vue from 'vue'
import {
  Toast,
  ImagePreview,
  Dialog,
  Tabbar,
  TabbarItem
} from 'vant'

Vue.prototype.$toast = Toast
Vue.prototype.$imagePreview = ImagePreview
Vue.prototype.$dialog = Dialog
Vue.use(Tabbar)
Vue.use(TabbarItem)
