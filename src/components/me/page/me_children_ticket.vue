<template>
<div class="me_children_ticket">
    <div class="top_name">
        <div><i class="iconfont icon-fanhui" @click="comback"></i>
        </div><div>我的优惠券</div>
        <div><span>兑换优惠券</span></div>
    </div>
    <div class="top_option">
        <div v-for="(item,index) in option_list" :key="index" @click="option_list_botton(index)" :class="pitch==index?'active':''">
            {{item.test}}<span v-if="typeof(item.num)=='number'">({{item.num}})</span>
        </div>
    </div>
    <div class="body_contents" v-if="pitch==0">
        <div v-for="(item,index) in quan_list" :key="index">
            <div class="man_title">
                <div>
                    <p>{{item.cou_name}}</p>
                    <span>线上/门店购物通用</span>
                </div>
                <div>
                    5
                </div>
            </div>
            <p>有效期：{{item.begintime}}-{{item.endtime}}</p>
            <div class="body_tear">
                    <span>{{item.remark}}</span>
                    <span @click="check_usage(item.id)">查看可用商品<i class="iconfont icon-jiantou"></i></span>
            </div>
        </div>
    </div>

    <div v-else>暂无赠品券</div>
    
</div>

</template>
<script>
import axios from "axios";
export default {
    name:'me_children_ticket',
    data(){
        return{
                pitch:0,
                option_list:[
                    {id:1,test:'抵用券',num:2},
                    {id:2,test:'赠品券',num:''}
                ],
                quan_list:[]
        }
    },
    mounted(){
        axios.get('/ShowCouponList').then((res)=>{
            this.quan_list=res.data
            this.option_list[0].num=res.data.length
        })


    },
    methods:{
        comback(){
            window.history.go(-1)

        },
        option_list_botton(index){
            this.pitch=index
        },
        check_usage(id){
            alert(id)
        }

    }
    
}
</script>

<style scoped>
.body_tear span:nth-child(2) i{
    font-size:0.rem;
    font-weight: bold;
}
.body_tear span:nth-child(2){
    color: #6ccfff;
    display: flex;
    align-items: center;
}
.body_tear span{
    color: #7e7e7e
}
.body_tear{
    margin-top: 0.2rem;
    width: 100%;
    height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.005rem dashed #7e7e7e;
    font-size: 0.12rem;
}
.body_contents>div>p{
    margin: 0.04rem 0;
    color: #7e7e7e;
    font-size: 0.12rem;
}
.man_title>div:nth-child(1) p{
    margin: 0.03rem 0;
    font-size: 0.18rem;
}
.man_title>div:nth-child(1) span{
    display: inline-block;
    font-size: 0.12rem;
    padding: 0.02rem;
    box-sizing: border-box;
    border: 0.005rem solid #6ccfff;
    color: #6ccfff;
}
.man_title>div:nth-child(2){
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    color: #6ccfff;
}
.man_title{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.body_contents>div{
    width: 95%;
    background: #fff;
    border-radius: 0.03rem;
    padding: 0.15rem;
    padding-bottom: 0;
    box-sizing: border-box;
    margin-bottom: 0.1rem;
}
.body_contents{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.top_option div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-top: 0.005rem solid #eeeeee;
}
.active{
    border-bottom: 0.01rem solid #6ccfff;
    color: #6ccfff;
}
.top_option{
    height: 0.4rem;
    display: flex;
    margin-bottom: 0.1rem;

}
.top_name div:nth-child(3){
    font-size: 0.16rem;
    justify-content: flex-end;
    color: #6ccfff;
}
.top_name div:nth-child(1) i{
    font-size: 0.28rem;
}
.top_name div{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    font-family: SimHei;

}
.top_name{
    width: 100%;
    height: 0.5rem;
    background: #fff;
    display: flex;
    padding:0 0.1rem ;
    box-sizing: border-box;
}

</style>

