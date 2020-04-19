<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id"><img :src="item.url" alt=""></li>
        </ul>       
    </div>
</template>

<script>
export default {
    name :"ItemImg",
    data (){
            return {
                list:[{
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
    img 
        width :100%
</style>