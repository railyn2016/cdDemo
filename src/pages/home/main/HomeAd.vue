<template>
    <div class="footer">
        <img src="static/img/ad-ft.jpg">
        <router-link class="adress" tag="p" :to="'/city'">{{this.$store.state.city}}</router-link>
        <router-link class="adress" tag="p" :to="'/room/RoomList'">查看科室</router-link>
        <div class="adress">
            <router-link tag="span" :to="'/users/login'">我要登录</router-link>
            <router-link tag="span" :to="'/users/register'">我要注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
   name :'HomeAd' 
}
</script>

<style lang="stylus" scoped>
    .footer img 
        width :100%
        margin :0.2rem 0
    .adress
        padding :0.2rem
        text-align :center
</style>