<template>
    <div id="head">
      <div class="content">
        <div class="avatar">
          <img :src="seller.avatar" alt="" class="img-responsive">
        </div>

        <div class="info">
          <h1><span class="brand"></span>{{seller.name}}</h1>
          <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
          <p>在线支付满28减5，满50减10</p>
        </div>
        <div class="r-btn"> 5个> </div>
      </div>
      <div class="bulletin"></div>
    </div>
</template>

<script>
  export default {
    name: 'head',
    components: {},
    props: {
      seller:{
        type:Object,
        default:{}
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" >
  #head {

    background: url("./img/bg.png") no-repeat center;
    background-color: rgba(7,17,27,0.5);
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
    p{
      font-size: .28rem;
    }
    .content{
      padding: 0.48rem;
      display: flex;
      .avatar{
        width: 1.28rem;
        height:1.28rem;
      }
      .info{
        width:4.3rem;
        color: #fff;
        margin-left: .32rem;
        h1{
          height: .36rem;
          line-height:.36rem;
          font-size: 0.32rem;
          display: flex;
          .brand{
            display: block;
            width: .6rem;
            height: .35rem;
            background: url("./img/brand@2x.png") no-repeat center;
            background-size: contain;
            align-self: center;
            margin-right: .12rem;
          }
        }
        p:nth-child(2){
          margin-top: .16rem;
          margin-bottom: .2rem;
          font-size: .24rem;
          font-weight:200;
        }
        p:nth-child(3){

          font-size: .20rem;
          font-weight:200;
        }
      }
      .r-btn{
        width: .86rem;
        height:.48rem;
        font-size: .2rem;
        color: rgb(255,255,255);
        background: rgba(0,0,0,0.2);
        line-height:.48rem;
        text-align: center;
        align-self: flex-end;
        border-radius: .24rem;
      }
    }




  }

</style>
