<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key='item.id'>
                <img class="swiper-img" :src="item.url">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name :'HomeSwiper',
    data (){
        return {
            swiperOptions: {
            pagination: {
                el: '.swiper-pagination',
                loop :true
                }
            },
            swiperList:[{
                id:'001',
                url:'static/img/ban01.jpg',
            },{
                id:'002',
                url:'static/img/ban02.jpg',
            },{
                id:'003',
                url:'static/img/ban03.jpg',
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper>>>.swiper-pagination-bullet-active
        background :#fff
    .wrapper
        width :100%
        height :0
        padding-bottom :46.85%
        background :#eee
        overflow :hidden
        .swiper-img
            width :100%
</style>
