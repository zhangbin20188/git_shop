import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '@/router/index';
Vue.use(Vuex)

var state={
    img_list:[],
    title_name:'',
    left_list:  [],
    right_list:[], //默认第一条数据
    particularsList:{},
    shopcartList:[], //购物车数据,
    contents_fen_list:[],
    contents_bazaar_list:[],
    contents_like_list:[],
    shopcartLength:[],//请求购物车的长度
    joinPages:[],
    recruitScrollY:0,
    merecruitScrollY:0
}
var getters={
    merecruitScrollY(){
        return state.merecruitScrollY
    },
    recruitScrollY(){
        return state.recruitScrollY
    },
    contents_like_list(){
        return state.contents_like_list
    },
    contents_bazaar_list(){
        return state.contents_bazaar_list 
    },
    contents_fen_list(){
        return state.contents_fen_list 
    },
    img_list(){
        return state.img_list 
    },
    left_list(){
        return state.left_list
    },
    right_list(){
        return state.right_list
    },
    particulars(){
        return state.particularsList
    },
    shopcartList(){
        return state.shopcartList
    },
    title_name(){
        return state.title_name
    },
    shopcartLength(){
        return state.shopcartLength
    },
    joinPages(){
        return state.joinPages
    }
}
var actions={
    mechangeRecruitScrollY(ctx,position){
        ctx.commit('mechangeRecruitScrollY',position)
    },
    changeRecruitScrollY(ctx,position){
        ctx.commit('changeRecruitScrollY',position)
    },
    contents_like_list(ctx){
        axios.get('/ShowContentList')
        .then((res)=>{
            ctx.commit('contents_like_list',res.data)
        })
    },
    contents_bazaar_list(ctx){
        axios.get('/ParityItem')
        .then((res)=>{
            // console.log(res.data) 
            ctx.commit('contents_bazaar_list',res.data)
    })
    },
    contents_fen_list(ctx){
        axios.get('/ShowCatListTop')
        .then((res)=>{
            // console.log(res.data) 
            ctx.commit('contents_fen_list',res.data)
    })
    },



    title_name(ctx,name){
        ctx.commit('title_name',name)
    },
    img_list_incident(ctx){
        axios.get('/ShowCatList')
        .then((res)=>{
                // console.log(res.data)
                ctx.commit('img_list_incident',res.data)
        })  
    },
    left_list(ctx,cat_id){
        var params= new URLSearchParams();
        params.append("parent_id",cat_id) //id
        axios.post('/ShowLeftItemList',params)
        .then((res)=>{
            ctx.commit("left_list",res.data)
        })
    },
    //右边侧边栏的请求
    right_list(ctx,obj){
        // console.log(obj)
        var params= new URLSearchParams();
        params.append('cat_id',obj.cat_id)
        params.append('sort_order',obj.sort_order)
        axios.post('/ShowRightItemList',params)
        .then((res)=>{
            ctx.commit("right_list",res.data)
        })
    },
    clickColor(ctx,obj){
        var params= new URLSearchParams();
        params.append('cat_id',obj.cat_id)
        params.append('sort_order',obj.sort_order)
        axios.post('/ShowRightItemList',params)
        .then((res)=>{
            ctx.commit("right_list",res.data)
        })
    },
    particulars(ctx,id){
        var params = new URLSearchParams();
        params.append('id',id)
        axios.post('/ShowItemDetails',params)
        .then((res)=>{
            ctx.commit("particulars",res.data)
        })
    },
    joinShoppcart(ctx,id){
        // console.log(id)
        var params = new URLSearchParams();
        params.append('id',id)
        axios.post('/insertCart',params)
        .then((res)=>{
            // console.log(res)
        })
    },
    joinShop(ctx,id){
        var params = new URLSearchParams();
        params.append('userid',id)
        axios.post('/ShowCartList',params)
        .then((res)=>{
                // console.log(res.data)
                ctx.commit('joinShop',res.data)
        })  
    },
    shopcartLength(ctx,id){
        var params = new URLSearchParams();
        params.append('userid',id)
        axios.post('/ShowCartList',params)
        .then((res)=>{
                // console.log(res.data)
                ctx.commit('shopcartLength',res.data)
        })  
    },
    joinPages(ctx,obj){
        // console.log(obj)
        ctx.commit('joinPages',obj)
    }
}
var mutations={
    mechangeRecruitScrollY(state,position){
        state.merecruitScrollY=position
    },
    changeRecruitScrollY(state,position){
        state.recruitScrollY=position
    },
    contents_like_list(state,data){
        // console.log(data)
        state.contents_like_list=data
    },
    contents_bazaar_list(state,data){
        // console.log(data)
        state.contents_bazaar_list=data
    },
    contents_fen_list(state,test){
        // console.log(test)
        state.contents_fen_list=test
    },


    title_name(state,name){
        state.title_name=name
    },
    img_list_incident(state,res){
        state.img_list=res
        // console.log(state.img_list)
    },
    left_list(state,data){
        // console.log(data)
        state.left_list=data

    },
    right_list(state,data){
        // console.log(data)
        state.right_list=data

    },
    particulars(state,data){
        console.log(data)
        state.particularsList = data
        // console.log(state.particularsList)
    },
    joinShop(state,data){
        // console.log(data)
        state.shopcartList = data
    },
    shopcartLength(state,data){
        state.shopcartLength = data
    },
    joinPages(state,data){
        // state.joinPages = data
        console.log(state.joinPages)
    }
}
export default new Vuex.Store({
	state,
	getters,
	actions,
    mutations,
    axios,
    router
	
})