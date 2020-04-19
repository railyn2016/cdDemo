<template>
    <div class="news">
        <div class="title">新闻动态</div>
        <div class="new">
            <ul>
                <router-link tag="li" class="border-bottom" v-for='item of newList' :key='item.id' :to="'/detail/' + item.id">
                    <span class="iconfont">&#xe7ad;</span>{{item.desc}}
                </router-link>
                <!-- <router-link :to="detail">
                    <li class="border-bottom" v-for='item of newList' :key='item.id'  ><span class="iconfont">&#xe7ad;</span>{{item.desc}}</li>
                </router-link> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name :'HomeIcons',
    data (){
        return{
            newList :[{
                id:'001',
                desc:'实现大国梦想实现大国梦想实现大国梦想实现大国梦想123456789'
            },{
                id:'002',
                desc:'实现大国梦想'
            },{
                id:'003',
                desc:'实现大国梦想'
            },{
                id:'004',
                desc:'实现大国梦想'
            },{
                id:'005',
                desc:'实现大国梦想'
            }]
        }
  
    },
    created (){
        //console.log(data())
    },
    mounted (){
        //let arr=[];
        //arr=newList;
        //console.log(arr)
        
        // let len=20
        // conList()
        //wordLen((this.newList.desc)[i], 10)
    },
    methods:{
        //     conList:function(){
        //     let con=''
        //     return this.newList.desc=con
        // },
         wordLen: function(content, len){
            var new_content = "";
            if (content.length > len) {
                new_content = content.substring(0, len);
                new_content += "..."
            }
            else {
                new_content = content;
            }
            return new_content;
        } 
}
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
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
    .new>ul
        padding :0 0.1rem       
    .new>ul>li
        height :0.8rem
        line-height :0.8rem 
        ellipsis() 
</style>