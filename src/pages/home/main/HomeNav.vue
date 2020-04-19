<template>
    <div class="nav">
        <a class="name border-rightbottom" v-for="item of list" :key="item.id" href="item.url">{{item.name}}</a>
    </div>
</template>

<script>
export default {
  name:'HomeNav',
  props :{
      list :Array
  },
  data(){
      return {
        // navList:[{
        //     id:'001',
        //     name:'网站首页',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'002',
        //     name:'医院历史',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'003',
        //     name:'博导专家',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'004',
        //     name:'科室介绍',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'005',
        //     name:'专利成果',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'006',
        //     name:'党政建设',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'007',
        //     name:'患者中心',
        //     url:'https://www.baidu.com'
        //     },{
        //     id:'008',
        //     name:'自助挂号',
        //     url:'https://www.baidu.com'
        //     }] 
      }
  }
}
</script>

<style lang="stylus" scoped>
    .nav
        display :flex
        justify-content: center
        align-items: center;
        flex-wrap :wrap
        a.name
            flex :0 0 25%
            height :0.8rem
            line-height :0.8rem
            color :#000
            text-align :center
            font-size :0.26rem
            box-sizing :border-box
        a.name:nth-child(4n)
            border-right :none
</style>