<template>
    <div class="icons clearfix">
        <div class="title">科室介绍</div>
        <div class="icon">
            <div class="icon-box border-rightbottom" v-for='item of list' :key='item.id'>
                <div class="icon-img"><img :src="item.url"></div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name :'HomeIcons',
    props :{
        list :Array
    },
    data (){
        return{
        // iconList: [{
        //     id :'001',
        //     url :'static/img/zck.png',
        //     desc :'痔疮科'
        // },{
        //     id :'002',
        //     url :'static/img/glk.png',
        //     desc :'肛瘘科'
        // },{
        //     id :'003',
        //     url :'static/img/bmk.png',
        //     desc :'便秘科'
        // },{
        //     id :'004',
        //     url :'static/img/jzck.png',
        //     desc :'结直肠科'
        // },{
        //     id :'005',
        //     url :'static/img/xegc.png',
        //     desc :'小儿肛肠科'
        // },{
        //     id :'006',
        //     url :'static/img/nzgc.png',
        //     desc :'女子肛肠科'
        // },{
        //     id :'007',
        //     url :'static/img/gmpf.png',
        //     desc :'肛门皮肤科'
        // },{
        //     id :'008',
        //     url :'static/img/zlk.png',
        //     desc :'肿瘤科'
        // },{
        //     id :'009',
        //     url :'static/img/bai.png',
        //     desc :'百年制剂'
        // },{
        //     id :'010',
        //     url :'static/img/jyk.png',
        //     desc :'检验科'
        // },{
        //     id :'011',
        //     url :'static/img/kfk.png',
        //     desc :'康复科'
        // },{
        //     id :'012',
        //     url :'static/img/vip.png',
        //     desc :'VIP'
        // }]
        }
  
    }
    
}
</script>

<style lang="stylus" scoped>
    .title
        height :0.93rem
        line-height :0.93rem
        text-align :center
        background :url(../../../assets/images/title-bg.png)
        background-size :80% 0.24rem
        background-repeat :no-repeat
        background-position :center center
        font-size :0.28rem
        color :#0052a6
        font-weight :700
    .icon
        div.icon-box
            padding :0.2rem 0 0.1rem
            width :25%
            float :left
            box-sizing :border-box
            text-align :center
            border-top :none
            .icon-img img 
                width :50%
            .icon-desc
                line-height :0.44rem
        div.icon-box:nth-child(4n)
            border-right :none
        div.icon-box:nth-child(9),div.icon-box:nth-child(10),div.icon-box:nth-child(11),div.icon-box:nth-child(12)
            border-bottom :none
</style>