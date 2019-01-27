import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        {//登陆页
            path: '/login',
            component:login
        },
        {//城市详情页
            path: '/city/:cityid',
            component:city
        },
         {//周边详情
            path: '/msite',
            component:msite
        },
         {//周边详情
            path: '/search/:geohash',
            component:search
        },
          {//周边详情
            path: '/food',
            component:food
        },
    ]
}]
