<template>
    <div class="item-box">
        <!-- <div class="roomImg"><img src="" alt=""></div> -->
        <ul>
            <li v-for="item of list" :key="item.id" :class="[{'actived':item.selected}]"
                @click.stop="bgChange(item)"
            >   
                <div class="item-con">
                  <em class="iconfont">&#xe7a5;</em>
                  <span>{{item.title}}</span>
                </div>
                <div v-if="item.childList && item.childList.length > 0" class="item-child">
                    <fade-animation>
                      <room-body :list="item.childList"  v-show="item.selected"></room-body>
                    </fade-animation>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import FadeAnimation from '../../public/FadeAnimation'
export default {
    name :"RoomBody",
    components:{
      FadeAnimation
    },
    props :{
        list :Array,
        childList :Array
    },
    methods: {
        bgChange (item){
            item.selected = !item.selected;
            //console.log(this.childList)
            this.recursion(item.list, item);
        },
    //   menuSpread (menu) {
    //     if (menu.menuRouter) this.$router.push(menu.menuRouter);
    //     menu.selected = !menu.selected;
    //     this.recursion(this.menuDate, menu);
    //   },
      recursion (all, temp) {
          for (let i;i<all.length;i++){
              if(item.title !== temp.title){
                item.selected = false;
                this.recursion(item.childList, temp);
              }
          }
        // all.forEach((item) => {
        //   if (item.title !== temp.title) {
        //     item.selected = false;
        //     this.recursion(item.childList, temp);
        //   }
        // });
      },
      showIconColor (item) {
        let show = false;
        if (item.level === '0') {
          item.childList.forEach(item => {
            if (item.childList.length <= 0 && item.selected) {
              show = true;
            }
            if (item.childList.length > 0) {
              item.childList.forEach(item => {
                if (item.selected) {
                  show = true;
                }
              });
            }
          });
        }
        return show;
      }
    }
    // computed :{
    //     itemLength() {
    //         if(item.childList.length>0){
    //             return
    //         }       
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .item-box ul li
        line-height :0.48rem
        padding-left :0.4rem
    .actived>.item-con
        background :$bgColor
        color :#fff
        .iconfont
            color :$bgColor
        .item-child ul li
            padding-left :0.4rem
            .iconfont
                color :$darkTextColor
</style>