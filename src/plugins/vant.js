import Vue from 'vue'
import {
  Toast,
  ImagePreview,
  Dialog,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  List,
  Card,
  Tag,
  Button,
  Image,
  Cell,
  CellGroup
} from 'vant'

Vue.prototype.$toast = Toast
Vue.prototype.$imagePreview = ImagePreview
Vue.prototype.$dialog = Dialog
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(List)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Image)
Vue.use(Cell)
Vue.use(CellGroup)
