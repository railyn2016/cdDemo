<template>
    <div class="body-box">
        <home-header></home-header>
        <home-nav :list='navList'></home-nav>
        <home-swiper></home-swiper>
        <home-icons :list = 'iconList'></home-icons>
        <home-news></home-news>
        <home-ad></home-ad>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './main/HomeHeader'
import HomeNav from './main/HomeNav'
import HomeSwiper from './main/HomeSwiper'
import HomeIcons from './main/HomeIcons'
import HomeNews from './main/HomeNews'
import HomeAd from './main/HomeAd'
import HomeFooter from './main/HomeFooter'
import axios from 'axios'
export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeNav,
        HomeSwiper,
        HomeIcons,
        HomeNews,
        HomeAd,
        HomeFooter
    },
    data (){
        return{
            navList:[],
            iconList:[]
        }
    },
    methods :{
       getHomeInfo () {
           axios.get('/api/index.json')
           .then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc (res) {
           res=res.data
           if(res.ret && res.data){
               const data = res.data
               this.navList = data.navList
               this.iconList = data.iconList
           }
           //console.log(res)
       } 
    },
    mounted (){
        this.getHomeInfo()
    },
}
</script>

<style lang='stylus' scoped>
    .body-box
        padding-top :1.12rem
        padding-bottom :1.3rem
</style>