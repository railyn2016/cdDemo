<template>
    <div class="body-box">
        <home-header></home-header>
        <item-img></item-img>
        <room-body :list="list"></room-body>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '../home/main/HomeHeader'
import HomeFooter from '../home/main/HomeFooter'
import ItemImg from './main/ItemImg'
import RoomBody from './main/RoomBody'
export default {
    name :"RoomList",
    components:{
        HomeHeader,
        ItemImg,
        RoomBody,
        HomeFooter
    },
    data (){
        return {
        list :[{
            "id":"001",
            "title":"大内科",
            "selected":false,
                childList :[{
                "id":"0001",
                "title":"流感科", 
                "selected":false,
                    childList :[{
                    "id":"00001",
                    "title":"男分诊", 
                    "selected":false
                    },{
                    "id":"00002",
                    "title":"女分诊", 
                    "selected":false
                    },{
                    "id":"0003",
                    "title":"小儿分诊", 
                    "selected":false
                    }]
                },{
                "id":"0002",
                "title":"消化科", 
                "selected":false
                },{
                "id":"0003",
                "title":"内脏科", 
                "selected":false
                }]
        },{
            "id":"002",
            "title":"大外科",
            "selected":false
        },{
            "id":"003",
            "title":"大肛肠科",
            "selected":false
        },{
            "id":"004",
            "title":"大痔疮科",
            "selected":false
        },{
            "id":"005",
            "title":"大胃肠科",
            "selected":false
        }]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .body-box
        padding-top :1.12rem
        padding-bottom :1.3rem
</style>