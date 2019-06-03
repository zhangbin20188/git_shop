<template>
    <div class="me_children_set_site_new_location">
        <div class="nav_top">
            <router-link to="me_children_set_site" tag="span" class="iconfont icon-fanhui1 iconreturn"></router-link>
            <span>新增收货地址</span>
            <span></span>
        </div>
        <div class="body_contents">
            <div>
                <p>收货地址</p>
                <input type="text" placeholder="省、市、区、路" v-model="location">
            </div>
            <div>
                <p>门牌号</p>
                <input type="text" placeholder="例：8号楼808室" v-model="house_num">
            </div>
            <div>
                <p>联系人</p>
                <input type="text" placeholder="联系人姓名" v-model="contacts">
            </div>
            <div>
                <p>手机号</p>
                <input type="text" placeholder="联系人电话" v-model="iphone">
            </div>
        </div>
        <div class="save_location">
            <div @click="save_location">
                保存
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"me_children_set_site",
    data(){
        return{
            location:'',
            house_num:'',
            contacts:"",
            iphone:''
        }
    },
    methods:{
        save_location(){
            if(this.location!=''||this.house_num!=''||this.contacts!=''||this.iphone!=''){
                var params=new URLSearchParams;
                params.append("location",this.location)
                params.append("house_num",this.house_num)
                params.append("contacts",this.contacts)
                params.append("iphone",this.iphone)
                axios.post('/saveAddress',params).then((res)=>{
                    alert(""+res.data.data+"")
                })
                this.location='',
               this.house_num='',
               this.contacts="",
                this.iphone=''
            }else{
                alert("输入选项为空")
            }
            

        }
    }
}
</script>
<style scoped>
.save_location div{
    width: 90%;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 0.16rem;
    background: #00c5ff;
    margin-top: 0.2rem

}
.save_location{
    width: 100%;
    display:flex;
    justify-content: center;

}
.body_contents div input{
outline: none;
border: none;
width: 80%;
font-size: 
}
.body_contents div p{
    margin: 0;
    font-size: 0.12rem;
    color: #777777;
    
}
.body_contents div{
    width: 100%;
    height: 0.3rem;
    border-bottom: #e7e7e7 solid 0.005rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.body_contents{
    background: #fff;
    margin-top: 0.1rem;
    padding: 0.05rem;
    box-sizing: border-box;
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


