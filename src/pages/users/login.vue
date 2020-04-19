<template>
    <div>
        <p>用户名、密码登录</p>
        <write-enter :list="userList"></write-enter>
    </div>
</template>

<script>
import WriteEnter from "./main/WriteEnter"
export default {
    name :"Login",
    components:{
        WriteEnter
    },
    methods :{
       getHomeInfo () {
           axios.get('/api/user.json')
           .then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc (res) {
           res=res.data
           if(res.ret && res.data){
               const data = res.data
               this.userList = data.userList
           }
       } 
    },
    mounted (){
        this.getHomeInfo()
    },
}
</script>

<style lang="stylus" scoped>
  *
    padding :0.2rem
</style>