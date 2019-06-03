<template>
<div class="home_special_recipe">
        
        <div class="contents_particulars">
                <img :src="particulars_list.image">
                <div>{{particulars_list.name}}</div>
                <div>
                    <p>难度：{{particulars_list.difficulty}}</p>
                    <p>时间：{{particulars_list.time}}</p>
                </div>
        </div>
        <div class="top_nav">
            <p><i class="iconfont icon-xiangzuojiantou" @click="$router.push({name:'home'})"></i></p>
            <p><i class="iconfont icon-gouwuche"></i> <i class="iconfont icon-fenxiang"></i></p>
        </div>
        <div class="zuozhe">
            <p>作者：{{particulars_list.author}}</p>
            <p>{{particulars_list.attemptNum}}人做过</p>
        </div>
        <div class="contents_inventory">
            <div class="contents_inventory_title">
                    <span>食材清单</span><span>/共{{particulars_list.hmRepertoires.length}}件</span>
            </div>
            <div class="contents_inventory_item" v-for="(item,index) in particulars_list.hmRepertoires" :key="index">
                <img :src="item.images">
                <div>
                    <div>{{item.title}}</div>
                    <div>
                        <p>￥{{item.price}}</p>
                        <p><span>找相似</span><i class="iconfont icon-gouwuche"></i></p>
                    </div>

                </div>
            </div>

        </div>

        

</div>
    
</template>
<script>
import axios from "axios";
export default {
    name:'home_special_recipe',
    data(){
        return{
            particulars_list:JSON.parse(localStorage.getItem("value"))||[],
        }
    },
    mounted(){
        axios.get('/findMenuAndRepertoire?menu_id='+this.$route.params.menu_id+'').then((res)=>{
            this.particulars_list=res.data
            console.log(res.data)
            localStorage.setItem("value",JSON.stringify(this.particulars_list))
        })
    }
    
}
</script>
<style scoped>
.contents_inventory .contents_inventory_item>div>div:nth-child(2) p:nth-child(2) i{
    font-size: 0.18rem;
    color: #10a1ff;
    margin-left: 0.2rem;
}
.contents_inventory .contents_inventory_item>div>div:nth-child(2) p:nth-child(2) span{
    display: inline-block;
    border-radius: 0.12rem;
    border: #10a1ff solid 0.005rem;
    font-size: 0.10rem;
    padding:0.01rem 0.07rem ;
    color: #10a1ff;

}
.contents_inventory .contents_inventory_item>div>div:nth-child(2) p:nth-child(1){
    color: #fe4544;
}
.contents_inventory .contents_inventory_item>div>div:nth-child(2) p{
    margin: 0;
    font-size: 0.14rem;
}
.contents_inventory .contents_inventory_item>div>div:nth-child(2){
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.contents_inventory .contents_inventory_item>div{
    flex: 7;
    font-size: 0.16rem;
    position: relative;
}
.contents_inventory .contents_inventory_item img{
    flex: 2;
    height: 100%;
}
.contents_inventory .contents_inventory_item{
    width: 100%;
    height: 0.8rem;
    padding: 0.1rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    border-bottom: #f5f5f5 solid 0.005rem;

    }
.contents_inventory_title span:nth-child(1){
     font-size: 0.18rem;
}
.contents_inventory_title span:nth-child(2){
    font-size: 0.12rem;
}
.contents_inventory_title{
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    border-bottom: #f5f5f5 solid 0.005rem;
}
.contents_inventory{
    width: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
    background: #fff;
}
.zuozhe p:nth-child(2){
    color: #999;
    font-size: 0.12rem;
    
}
.zuozhe{
    width: 100%;
    height: 0.5rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    font-size: 0.14rem;
}
.contents_particulars>div:nth-child(3) p{
    margin: 0;
}
.contents_particulars>div:nth-child(3){
    position: absolute;
    top: 3.1rem;
    font-size: 0.10rem;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 0.6rem;
    box-sizing: border-box;
    justify-content: space-between;
}

.contents_particulars>div:nth-child(2){
    position: absolute;
    top: 2.6rem;
    width: 100%;
    height: 0.5rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    font-size: 0.26rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.top_nav p:nth-child(1) i{
    z-index: 1000;
}
.top_nav p:nth-child(2) i:nth-child(2){
    margin-left: 0.05rem;
}
.top_nav i{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.2rem;
    color: #fff;
    z-index: 1000;
}
.top_nav p:nth-child(2){
    display: flex;
    align-items: center;
}
.top_nav{
    width: 100%;
    height: 0.4rem;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
}
.contents_particulars img{
    width: 100%;
    height: 100%;
}
.contents_particulars{
    width: 100%;
    height: 3.5rem;
    position: relative;
}

</style>

