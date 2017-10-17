import Vue from 'vue'
import Router from 'vue-router'
import goods from '../pages/goods/goods.vue'
import ratings from '../pages/ratings/ratings.vue'
import seller from '../pages/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
