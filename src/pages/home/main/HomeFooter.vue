<template>
    <div class="footer-box">
        <div class="footer border-topbottom">
            <div class="box border-right" v-for="item of footList" :key="item.id" to="item.url">
                <span v-html="item.content" class="iconfont footer-icon"></span>
                <p class="footer-desc">{{item.name}}</p>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'HomeFooter',
  data(){
      return {
        footList:[{
            id:'001',
            name:'首页',
            url:'https://www.baidu.com',
            content:'&#xe69b;'
            },{
            id:'002',
            name:'电话问诊',
            url:'https://www.baidu.com',
            content:'&#xe671;'
            },{
            id:'003',
            name:'在线问诊',
            url:'https://www.baidu.com',
            content:'&#xe63c;'
            },{
            id:'004',
            name:'来院路线',
            url:'https://www.baidu.com',
            content:'&#xe738;'
            }] 
      }
  }
}
</script>

<style lang="stylus" scoped>
.footer-box
    position :fixed
    bottom :0
    left :0
    width :100%
    background :#fff
    .footer
        display :flex
        padding :0.2rem 0
        color :#0052a6
        .box
            flex :1
            height :0.9rem
            text-align :center
            font-size :0.26rem
            box-sizing :border-box
            .footer-icon
                font-size :0.56rem
            .footer-desc
                line-height :0.3rem
                font-size :0.2rem
                color :#000
</style>