<template>
<div class="home_information">
    <div class="nav_top">
            <router-link to="home" tag="span" class="iconfont icon-fanhui1 iconreturn"></router-link>
            <span>消息</span>
            <span> </span>
    </div>
    <div class="body_contents">
        <div class="body_contents_item" v-for="(item,index) in list" :key="index">
            <p>
                <span>{{item.time}}</span>
            </p>
            <div class="body_contents_item_ticket">
                 <div>
                     鳄鱼小纸条
                 </div>
                 <div>
                     <p>{{item.items}}</p>
                    <p><i class="iconfont icon-jiantou" @click="me_children_ticket"></i></p>
                 </div>
            </div>

        </div>
    </div>

</div>
    
</template>
<script>
export default {
    name:'home_information',
    data(){
        return{
            list:[
                {id:1,time:'5月16号',items:'您的15元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},
                {id:2,time:'5月18号',items:'您的10元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},
                {id:3,time:'5月10号',items:'您的25元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},
                {id:4,time:'5月19号',items:'您的35元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},
                {id:5,time:'6月10号',items:'您的40元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},
                {id:6,time:'7月15号',items:'您的5元鳄鱼优惠券即将在1天内过期，赶紧去使用吧。'},

            ]

        }
    },
    methods:{
        me_children_ticket(){
            this.$router.push({name:'me_children_ticket'})
        }
    }
    
}
</script>
<style scoped>
.body_contents_item_ticket>div:nth-child(2) p:nth-child(2) i{
    font-size: 0.28rem
}
.body_contents_item_ticket>div:nth-child(2) p:nth-child(2){
    width: 5%;
    
}
.body_contents_item_ticket>div:nth-child(2) p:nth-child(1){
    width: 95%;
    height: auto;  
    word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;
}
.body_contents_item_ticket>div:nth-child(2) p{
    margin: 0;
}
.body_contents_item_ticket>div:nth-child(2){
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0.06rem 0;
    box-sizing: border-box;
}
.body_contents_item_ticket>div:nth-child(1){
    color: #777777;
    height: 0.3rem;
    border-bottom: #e7e7e7 solid 0.005rem;
    display: flex;align-items: center;
}
.body_contents_item_ticket{
    padding: 0.1rem;
    background: #fff;
    border-radius: 0.06rem;
    box-sizing: border-box;
    font-size: 0.16rem;
}
.body_contents_item p span{
    display: inline-block;
    padding: 0.02rem 0.08rem;
    box-sizing: border-box;
    font-size: 0.12rem;
    border-radius: 0.06rem;
    background: #c9c9c9;
}
.body_contents_item p{
    margin: 0.1rem 0;
    display: flex;
    justify-content: center;
}
.body_contents_item{
    width: 96%;
    margin-top: 0.5em;
}
.body_contents{
    display: flex;
    justify-content:center ;
    flex-flow: row wrap;
}
.nav_top{
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    display:flex;
    justify-content: space-around;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
}
.nav_top span{
    flex: 1;
}
.nav_top span:nth-child(2){
    display: flex;
    justify-content: center;

}

</style>

