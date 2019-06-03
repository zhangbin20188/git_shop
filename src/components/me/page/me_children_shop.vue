<template>
    <div class="me_children_shop">
        <div class="nav_top">
            <router-link to="me" tag="span" class="iconfont icon-fanhui1 iconreturn"></router-link>
            <span>鳄鱼门店</span>
            <span><i class="iconfont icon-fenxiang1"></i></span>
        </div>

        <div class="body_contents" v-for="(item,index) in list" :key="index">
            <div class="images">
                <img :src="item.simage" >
            </div>
            <p>{{item.sname}}</p>
            <div class="location">
                <p>{{item.saddress}}</p>
                <p @click="ditu">123</p>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    naem:'me_children_shop',
    data(){
        return{
            list:[]
        }
    },
    methods:{
        ditu(){
            
        }

    },
    mounted(){
            axios.get('/HmstoresList').then((res)=>{
                // console.log(res)
                this.list=res.data
            })
    }
}
</script>
<style scoped>
.location p:nth-child(2){
    width: 10%
}
.location p:nth-child(1){
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.location p{
    margin: 0;
    padding: 0;
    font-size: 0.12rem;
    color: #aeaeae;
}
.location{ 
    padding: 0.05rem 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.body_contents>p{
    margin: 0.05rem 0 ;
    padding: 0 0.1rem;
    box-sizing: border-box;
    font-size: 0.14rem;
}
.images img{
    width: 100%;
    height: 100%;
}
.images{
    width: 100%;
    height: 1.5rem;
}
.body_contents{
    margin-top: 0.1rem;
    background: #fff;
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
}
.nav_top span:nth-child(3) i{
    font-size: 0.24rem;
    color: #00c5ff;
}

</style>

