<template>
    <div class="logo">
        <a class="iconfont icon-phone" href="Tel:028-86080522">&#xe602;</a>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    data () {
        return {
            // positionStyle : {
            //     position :'absolute'
            // },// :style="positionStyle"
        }
    },
    // created () {
    //     window.addEventListener('scroll', this.handleScroll)
    // },
    // methods  : {
    //     handleScroll () {
    //         const top =document.documentElement.scrollTop
    //         if (top>0){
    //             //const absolute = 'absolute'
    //             this.positionStyle={
    //                position :'fixed'
    //             }
    //         }else{
    //             this.positionStyle={
    //                position :'absolute'
    //             }
    //         }
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    .logo
        position :fixed
        height :1.12rem
        overflow :hidden
        background :url(../../../assets/images/logo.jpg)
        background-size :100% 100%
        width :100%
        top :0
        z-index :11
        overflow :hidden
        img 
            width :100%
        .icon-phone
            position :absolute
            right :0
            top :0
            height :1.12rem
            line-height :1.12rem
            width :1.12rem
            font-size :0.52rem
            color :#fff
            text-align :center
</style>