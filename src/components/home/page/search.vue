<template>
    <div class="searchsssss">
        <div class="nav_top">
            <div class="come_back" @click="come_back"><i class="iconfont icon-fanhui"></i></div>
            <div><input type="text" class="input_color" placeholder="输入搜索的内容.." v-model="contents" @focus="shows" @blur="hiddens"></div>
            <div @click="searchs"><p>搜索</p></div>
        </div>
        <div class="contents" v-if="this.onoff">
            <p>历史记录</p>
            <div class="line"></div>
            <p v-if="this.searchs_list.length==0">暂无搜索记录</p>
            <div class="li_list" v-else>
                <span v-for="(item,index) in searchs_list" :key="index" @click="index_item(item)">{{item}}</span>
            </div>
        </div>

        <div class="body_contents_instrument_push" v-else>
            <div v-for="(item,index) in search_llist" :key="index" @click="me_xiangqing(item)"> 
                <img :src="item.image" >
                <p>{{item.title}}</p>
                <div>
                    <p>￥{{item.price}}</p>
                    <p><span class="iconfont icon-gouwuche"></span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { URLSearchParams } from 'url';
export default {
    name:"search",
    data(){
        return{
            contents:'',
            onoff:false,
            searchs_list:[],
            search_llist:[]

        }
    },
    methods:{
        // input框失去焦点
        hiddens(){
            this.onoff=false
        },
        // input得到焦点
        shows(){
            this.onoff=true
        },
        // 点击历史记录
        index_item(name){
                console.log(name)
        },
        // 点击搜索 
        searchs(){
            // console.log(this.contents)
            axios.get('/search?keyword='+this.contents+'').then((res)=>{
                this.search_llist=res.data
            })
            this.searchs_list.push(this.contents)
            if(this.searchs_list.length>5){
                this.searchs_list.splice(0,1)
            }

        },
        // 点击返回
        come_back(){
            this.$router.push({name:'home'})
        },
        // 点击搜索内容
        me_xiangqing(item){
            var obj={
                item:item
            }
            this.$router.push({name:'particulars_one',params:{obj}})
        }
    },


    
  
    
}
</script>
<style scoped>
.nav_top{
    position: fixed;
    top: 0;
}
.nav_top>div:nth-child(3) p{
    margin: 0;
    border-radius: 0.12rem;
    background: red;
    padding: 0.025rem 0.1rem;
    color: #fff;
    font-size: 0.14rem;
    background: linear-gradient(left,#00dafd,#07b1fe)
}
.self_motion p{
    padding: 0.1rem 0.1rem;
    box-sizing: border-box;
    font-size: 0.12rem;
    margin: 0;
    border-bottom: #f5f5f5 solid 0.005rem;
}
.self_motion{
    width: 100%;
    background: #fff;
}
.li_list span{
    display: block;
    color: #333;
    font-size: 0.12rem;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
    padding: 0.05rem 0.1rem;
    border-radius: 0.12rem;
    background: #f5f5f5
}
.li_list{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}
.line{
    width: 100%;
    border-bottom: #f5f5f5 solid 0.005rem;

}
.contents p{
    display: block;
    color: #909090;
    margin-bottom:0 0.05rem;
    font-weight: bold;
}
.contents{
    position: absolute;
    top: 0.25rem;
    width: 100%;
    margin-top: 0.1rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    background: #fff;
    height: 6.3rem;

}
.nav_top>div:nth-child(2){
    flex: 30%;
    display: flex;
    justify-content: center;

}
.input_color{
    outline: none;
    box-shadow: none;
    border: none;
    width: 70%;
    height: 0.25rem;
    background: #f5f5f5;
    border-radius: 0.12rem;
    padding:0 0.075rem;
    box-sizing: border-box;
}
.nav_top{
    width: 100%;
    height: 0.35rem;
    background: #ffffff;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #f5f5f5 solid 0.005rem;
}
.come_back{
    color: #909090;
}
.come_back i{
    font-size: 0.28rem;
}
.body_contents_instrument_push>div>div>p:nth-child(2) span{
    font-size: 0.27rem;
    color: #00c5ff;
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
    padding-right: 0.05rem;
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
    width: 48%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 0.1rem 0.025rem;
    margin-top: 0.03rem;
}
.body_contents_instrument_push{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 0.35rem;

}
.body_contents_instrument_push_title span a{
    color: #85bcbc;
}
.body_contents_instrument_push_title span{
    font-weight: bold;
}
.body_contents_instrument_push_title{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  0.05rem 0;
}



</style>