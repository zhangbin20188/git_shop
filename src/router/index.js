import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import home_special_recipe from '@/components/home/page/home_special_recipe'
import home_information from '@/components/home/page/home_information'
import classify from '@/components/classify/classify'
import community from '@/components/community/community'
import shopcart from '@/components/shopcart/shopcart'
import me from '@/components/me/me'
import me_children_set from '@/components/me/page/me_children_set'
import me_children_ticket from '@/components/me/page/me_children_ticket'
import me_children_account from '@/components/me/page/me_children_account'
import me_children_serve from '@/components/me/page/me_children_serve'
import me_children_shop from '@/components/me/page/me_children_shop'
import me_children_set_site from '@/components/me/page/me_children_set_site'
import me_children_set_site_new_location from '@/components/me/page/me_children_set_site_new_location'


// 二级路由
import classify_children from '@/components/classify/page/classify_children'
import particulars from '@/components/classify/page/particulars'
import particulars_one from '@/components/classify/page/particulars_one'
import hot_children from '@/components/community/pages/hot_children'
import pages from '@/components/shopcart/pages/pages'
import search from '@/components/home/page/search'



Vue.use(Router)

export default new Router({
  routes: [
      //tabbar路由
    {
      path:"/",
      redirect:"/home",
    },
    {path:'/home_special_recipe',name:'home_special_recipe', component:home_special_recipe},
    {path:'/home_information',name:'home_information', component:home_information},
    {
        path:"/home",
        name:"home",
        component:home,
        meta:{showTabber:true,keepAlive:true}
    },

    {
        path:"/classify",
        name:"classify",
        component:classify,
        meta:{showTabber:true}
    },
    {path:'/classify_children',name:'classify_children', component:classify_children},
    {path:'/particulars',name:'particulars', component:particulars},
    {path:'/particulars_one',name:'particulars_one', component:particulars_one},
    {path:'/hot_children',name:'hot_children', component:hot_children},   
    {path:'/pages',name:'pages', component:pages},
    {
        path:"/community",
        name:"community",
        component:community,
        meta:{showTabber:true}
    },
    {
        path:"/shopcart",
        name:"shopcart",
        component:shopcart,
        meta:{showTabber:true}
    },
    {
        path:"/me",
        name:"me",
        component:me,
        meta:{showTabber:true,keepAlive:true}
    },
    {path:'/me_children_set',name:'me_children_set', component:me_children_set},
    {path:'/me_children_ticket',name:'me_children_ticket', component:me_children_ticket},
    {path:'/me_children_account',name:'me_children_account', component:me_children_account},
    {path:'/me_children_serve',name:'me_children_serve', component:me_children_serve},
    {path:'/me_children_shop',name:'me_children_shop', component:me_children_shop},
    {path:'/me_children_set_site',name:'me_children_set_site', component:me_children_set_site,meta:{keepAlive:true}},
    {path:'/me_children_set_site_new_location',name:'me_children_set_site_new_location', component:me_children_set_site_new_location,},
    //非tabbar路由
    {
        path:"/search",
        name:"search",
        component:search,
        meta:{keepAlive:true}
    },
    

  ]
})
