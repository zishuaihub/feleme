<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <div class="tabs">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import head from './components/head/head.vue'
  import goods from './pages/goods/goods.vue'
  import seller from './pages/seller/seller.vue'
  import ratings from './pages/ratings/ratings.vue'
export default {
    name: 'app',
    components: {
      'v-head': head,
      goods,
      ratings,
      seller
    },
    data (){
      return {
        seller:{}
      }
    },
    mounted () {
      this.$nextTick(
        () => {
          this.$http.get(`/api/seller`).then(res=>{
            if (res.data.errno ===0 ){
              console.log(res.data.data)
              this.seller=res.data.data

          }
          })
        }
      )
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .tabs{
    display: flex;
  }

  .tabs { border-bottom: 1px solid rgba(7,17,27,0.1) }
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .tabs { border-bottom: 0.5px solid rgba(7,17,27,0.1) }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 3) {
    .tabs { border-bottom: 0.333333px solid rgba(7,17,27,0.1) }
  }





  .tab-item {
    font-size: 18px;
    color: rgb(77,85,93);
    height: 40px;
    line-height: 40px;
    flex:1;
    text-align: center;
  }

  .tab-item a{
    display: block;
  }
.tab-item .router-link-active{
  color: rgb(240,20,20);
}
a:visited{
  color: inherit;
}
</style>
