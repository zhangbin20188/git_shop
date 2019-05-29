<template>
  
    <div>
        <!-- 头部导航 -->
        <div class="nav_top">
            <div class="head_portrait" @click="self_message">
                <img :src="sss" >
            </div>
            <router-link to="/search" tag="div" class="sherch_content">
                <i class="iconfont icon-sousuo"></i>
                搜索美食....
            </router-link>
            <div class="chat"><i class="iconfont icon-luntan1"></i></div>
        </div>


        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
              <img :src="item.imgurl"/>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
          <!-- 大分类 -->
        <div class="body_contents_fen">
          <div v-for="(item,index) in contents_fen_list" :key="index" @click="dafenlei(item)">
            <img :src="item.imges">
              <p>{{item.name}}</p>
          </div>
        </div>

        <div class="body_contents_img">
            <img src="./image/111.png">
            <div class="body_contents_bazaar">
                <div>
                    <p>平价市场</p>
                    <p>更多<i class="iconfont icon-jiantou"></i></p>
                </div>
                <div>
                      <div class="wiper_list" >
                        <div v-for="(item,index) in contents_bazaar_list" :key="index" @click="market(item)">
                          <img :src="item.image">
                          <p>{{item.sell_point}}</p>
                          <div>
                            <p>￥{{item.price}}</p>
                            <p><i class="iconfont icon-gouwuche"></i></p>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <div class="bottom_nav">
          <div v-for="(item,index) in contents_like_list" :key="index" @click="like_list_change(index)">
            <p :class="pitch==index?'actives':''">{{item.content_name}}</p>
            <p :class="pitch==index?'active':''">{{item.content_describe}}</p>
          </div>

        </div>
        <div class="body_contents_instrument_push">
            <!-- 猜你喜欢 -->
            <div v-for="(item,index) in shop_llist" :key="index" v-if="shop_llist!=''" @click="like_list(item)"> 
                <img :src="item.image" >
                <p>{{item.title}}</p>
                <div>
                    <p>￥{{item.price}}</p>
                    <p><span class="iconfont icon-gouwuche"></span></p>
                </div>
            </div>
            <!-- 厨房菜谱 -->
            <div v-for="(item,index) in greens_shop_llist" :key="index" @click="special_recipe(item.menu_id)"> 
                <img :src="item.image" >
                <p>{{item.name}}</p>  
                <p>作者：{{item.author}}</p>
                <div>
                    <p class="ttttt">{{item.time}}</p>
                    <p>{{item.attemptNum}}人做过</p>
                </div>
            </div>
        </div>
        
  <div class="bottom">

  </div>
    </div>
</template>
<script>
import axios from "axios";
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper';
export default {
  name: "home",
  data() {
    return {
      pitch:JSON.parse(localStorage.getItem("value"))||0,
      sss: require("./image/head_portrait.jpg"),
      list:[
        {imgurl:require("./image/1.0.jpg")},{imgurl:require("./image/1.1.jpg")},{imgurl:require("./image/1.2.jpg")},{imgurl:require("./image/1.3.jpg")},{imgurl:require("./image/1.4.jpg")},{imgurl:require("./image/1.5.jpg")},
      ],
      shop_llist:[],
      greens_shop_llist:[],
      shop_llist_title:['/Guessyoulike','/Getreadylunch','/GetMenuList','/Leisuresnacks','/Vegetablemarket']
     
    }
  },
  methods:{
    self_message(){
      this.$router.push({name:'me_chidren_message'})
    },
    dafenlei(item){
         this.$router.push({name:'classify_children',params:{item}})
    },
    like_list(item){
      var obj={
          item:item
      }
      this.$router.push({name:'particulars_one',params:{obj}})
    },
    market(item){
      var obj={
          item:item
      }
      this.$router.push({name:'particulars_one',params:{obj}})
    },
    like_list_change(index){
      this.pitch=index
      // console.log(this.shop_llist_title[index])
      localStorage.setItem("value",JSON.stringify(this.pitch))
      axios.get(''+this.shop_llist_title[index]+'').then((res)=>{
        // console.log(res.data)
        if(index==2){
          console.log(res.data)
              this.greens_shop_llist=res.data
              this.shop_llist=''
        }else{
              this.shop_llist=res.data
              this.greens_shop_llist=''
        }
      })
      
    },
    special_recipe(menu_id){
      this.$router.push({name:'home_special_recipe',params:{menu_id}})
    },
    
    
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      autoplay:4000,
      observer:true,
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
        　　disableOnInteraction: false,   // 手动滑动后继续自动播放
    　　 },
						//分页器
						pagination:{
							el:'.swiper-pagination'
			}
    });
    // console.log(this.shop_llist.length)
      // if(this.shop_llist.length==0){
      // }
      axios.get('/Guessyoulike').then((res)=>{
              this.shop_llist=res.data
      })
    
    this.$store.dispatch('contents_fen_list')
    this.$store.dispatch('contents_bazaar_list')
    this.$store.dispatch('contents_like_list')
  },
  computed:{
    contents_fen_list(){
        return  this.contents_fen=this.$store.getters.contents_fen_list
    },
    contents_bazaar_list(){
      return  this.contents_fen=this.$store.getters.contents_bazaar_list
    },
    contents_like_list(){
       return  this.contents_fen=this.$store.getters.contents_like_list
    }
  },
  beforeRouteLeave(to, from, next) {
    let position = window.scrollY  //记录离开页面的位置
    if (position == null) position = 0
    this.$store.dispatch('changeRecruitScrollY',position) //离开路由时把位置存起来
    next()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'home') {//跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
        let recruitScrollY = this.$store.getters.recruitScrollY
        window.scroll(0, recruitScrollY)
      }
    }
  }
 
}
</script>
<style scoped>
.body_contents_instrument_push>div>div>p:nth-child(2){
  font-size: 0.14rem;
    color: #00c5ff;
}
.body_contents_instrument_push>div>div>p:nth-child(2) span{
    font-size: 0.27rem;
    color: #00c5ff;
}
.body_contents_instrument_push>div>div>p:nth-child(1).ttttt{
    color: #767676;
    font-size: 0.14rem;
}
.body_contents_instrument_push>div>div>p:nth-child(1){
    color: #c6535a;
    
}
.body_contents_instrument_push>div>div>p{
    margin: 0.05rem 0;
    font-size: 0.2rem;
}
.body_contents_instrument_push>div>div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.05rem;
    box-sizing: border-box;
}
.body_contents_instrument_push>div p{
    font-size: 0.14rem;
}
.body_contents_instrument_push>div img{
    width: 1.5rem;
    height: 1.5rem;
}
.body_contents_instrument_push>div>p:nth-child(3){
    font-size: 0.14rem;
    color: #bcb9b9;
}
.body_contents_instrument_push>div>p{
    width: 100%;
    margin: 0.025rem;
    overflow: hidden;/*内容超出后隐藏*/
    text-overflow: ellipsis;/* 超出内容显示为省略号*/
    white-space: nowrap;/*文本不进行换行*/
}
.body_contents_instrument_push>div{
    width: 47%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 0.1rem 0.025rem;
    border-radius: 0.12rem;
    margin-top: 0.1rem;
}
.body_contents_instrument_push{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.bottom_nav div p:nth-child(1).actives{
  color: #08b6fe;
}
.bottom_nav div p:nth-child(2).active{
    color: #fff;
    background: #08b6fe;
}
.bottom_nav div p:nth-child(2){
  font-size: 0.12rem;
  color: #767676;
  width: 80%;
  border-radius: 0.12rem;
}
.bottom_nav div p:nth-child(1){
  margin: 0.1rem 0;
  font-weight: bold;
  font-size: 0.14rem
}
.bottom_nav div p{
  width: 100%;
  margin: 0;
  display: flex; 
  justify-content: center;
}
.bottom_nav div{
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

}
.bottom_nav{
  margin-top: 0.1rem;
  width: 100%;
  padding:0 0.15rem;
  box-sizing: border-box;
  display: flex;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div>div>p:nth-child(2){
  margin: 0;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background: #08b6fe;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div>div>p:nth-child(2) i{
  font-size: 0.18rem;
  color: #fff;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div>div>p:nth-child(1){
  color: #f95a5f;
  font-size: 0.12rem;
  margin: 0;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div>div{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div>p{
  width: 100%;
  margin: 0.05rem 0;
  font-size: 0.12rem;
  color: #767676;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div img{
  width: 0.8rem;
  height: 0.8rem;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list>div{
  width: 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-right: 0.05rem;
}
.body_contents_bazaar>div:nth-child(2) .wiper_list{
  height: 100%;
  width: 5rem;
  position: absolute;
  display: flex;
  z-index: 1;
}
.body_contents_bazaar>div:nth-child(2){
  height: 1.3rem;
  width: 100%;
  position: relative;
  overflow: auto;
}
.body_contents_bazaar>div:nth-child(1) p:nth-child(2){
  color:#767676;
}
.body_contents_bazaar>div:nth-child(1) p:nth-child(1){
  font-weight: bold;
}
.body_contents_bazaar>div:nth-child(1) p{
  margin: 0;
  font-size: 0.14rem;
}
.body_contents_bazaar>div:nth-child(1){
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.body_contents_bazaar{
  width: 100%;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
  padding: 0.05rem 0.02rem;;
}
.body_contents_img img{
  width: 100%;
  height: 1.2rem;
  border-radius: 0.1rem;
}
.body_contents_img{
  width: 100%;
  display: flex;
  justify-content: center;
  padding:  0 0.15rem;
  box-sizing: border-box;
  flex-flow: row wrap;
}
.body_contents_fen>div p{
  width: 100%;
  margin: 0.05rem 0;
  display: flex;
  justify-content: center;
  font-size: 0.12rem;
  color: #404040;
}
.body_contents_fen>div img{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.body_contents_fen>div{
  flex: 20%;
  display: flex;
  justify-content: center;
  flex-flow:row wrap;
}
.body_contents_fen{
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
  margin: 0.1rem 0;
  display: flex;
  flex-flow: row wrap;
}
.swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .swiper-slide img {
    max-width: 100%;
  }
  .swiper-slide {
    /* height: 1rem; */
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }


.nav_top {
  width: 100%;
  height: 0.6rem;
  background: #08b6fe;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.sherch_content {
  width: 2.5rem;
  height: 0.4rem;
  background: #ffffff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  color: #cfcfcf;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.sherch_content i {
  font-size: 0.24rem;
}
.head_portrait {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.4rem;
  margin-right: 0.1rem;
}
.head_portrait img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}
.chat {
  margin-left: 0.15rem;
  width: 0.4rem;
  height: 0.4rem;
}
.chat i {
  font-size: 0.4rem;
  color: #ffffff;
}


.bottom{
    width: 100%;
    margin-bottom: 0.65rem;
}
</style>