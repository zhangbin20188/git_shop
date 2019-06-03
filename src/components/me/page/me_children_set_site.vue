<template>
    <div class="me_children_set_site">
        <div class="nav_top">
            <router-link to="me_children_set" tag="span" class="iconfont icon-fanhui1 iconreturn"></router-link>
            <span>地址</span>
            <span @click="new_location">新增地址</span>
        </div>
        <div class="not_contents" v-if="list.length==0">
            <p>还没收货地址喔!</p>
            <div>添加一个收货地址</div>
        </div>
        <div class="body_contents">
            <div class="list_contents" v-for="(item,index) in list" :key="index">
                <div>
                    <p>{{item.location}}{{item.house_num}}</p>
                    <p>{{item.contacts}}&nbsp;&nbsp;&nbsp;{{item.iphone}}</p>
                </div>
                <div><i class="iconfont icon-bianji1"></i></div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'me_children_set_site',
    data(){
        return{
        list:[]

        }
    },
    mounted(){  
        axios.get('/addressList').then((res)=>{
            this.list=res.data
        })

    },
    methods:{
        new_location(){
            this.$router.push({name:'me_children_set_site_new_location'})
        }

    },

}
</script>
<style scoped>
.list_contents>div:nth-child(1) p:nth-child(2){
    margin: 0;
    font-size: 0.10rem;
    color: #777;
}
.list_contents>div:nth-child(1) p:nth-child(1){
    margin: 0.02rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.12rem;
}
.list_contents>div:nth-child(1){
    width: 95%;
}
.list_contents>div:nth-child(2) i{
    font-size: 0.16rem;
    color: #777
}
.list_contents>div:nth-child(2){
     width: 5%;
     display: flex;
     justify-content: center;
     align-items: center;
     
}
.list_contents{
    width: 100%;
    background: #fff;
    padding: 0.05rem;
    box-sizing: border-box;
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-between;
}
.not_contents p{
    width: 100%;
    margin: 0;
    font-size: 0.24rem;
    color: #777777;
    display: flex;
    justify-content: center;
    align-items: center;

}
.not_contents div{
    width: 50%;
    height: 0.3rem;
    background: #00c5ff;
    border-radius: 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.not_contents{
    width: 100%;
    height:6.2rem;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
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
.nav_top span:nth-child(3){
    display: flex;
    justify-content: flex-end;
    color: #00c5ff;
    font-size: 0.14rem;
}


</style>


