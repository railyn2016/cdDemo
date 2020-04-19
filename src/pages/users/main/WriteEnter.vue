<template>
    <div>
        <div class="box border-bottom">
            <input id="UserName" type="text" v-model="nameIn" placeholder="请输入用户名">
        </div>
        <div class="box border-bottom">
            <input id="UserPsd" type="text" v-model="psdIn" placeholder="请输入密码">
        </div>
        <div>
            <input type="button" value="提交" @click="handleSub">
        </div>
    </div>
</template>

<script>
export default {
    name :"Login",
    props :{
        userList:Array
    },
    data (){
        return {
           nameIn :'',
           psdIn :'' 
        }
    },
    methods :{
        handleSub :(item)=>{
           let sName=document.getElementById('UserName').value;
           console.log(sName);
           recursion(item.userList, temp);
        },
      recursion (all, temp) {
        all.forEach((item) => {
          if (item.name !== temp.name) {
              alert ("你输入的用户名不存在");
            //item.selected = false;
            //this.recursion(item.childList, temp);
          }
          else{
             alert ("用户名输入正确"); 
          }
        });
      }
    },
    mounted (){
        //let sName=document.getElementById('UserName').value;
        //console.log(sName)
    }
}
</script>

<style lang="stylus" scoped>
  *
    padding :0.2rem

</style>