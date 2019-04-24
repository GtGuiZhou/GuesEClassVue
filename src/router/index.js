import Vue from 'vue'
import Router from 'vue-router'
import humanwall from './module/humanwall'
import setting from './module/setting'
Vue.use(Router)

export default new Router({
    // 当页面切换时滚动条处于什么位置
    scrollBehavior() {
        return { x: 0, y: 0 } // 最上、最左边
    },
    routes: [
        ...setting,
        ...humanwall,
        {
            path: '/',
            name: 'Index',
            component: resolve => require(['@/pages/home/Index.vue'], resolve)
        },
        {
            path: '/timetable',
            name: 'TimeTable',
            component: resolve => require(['@/pages/zf/timetable/Index.vue'], resolve)
        },
        {
            path: '/scorereport',
            name: 'ScoreReport',
            component: resolve => require(['@/pages/zf/scorereport/Index.vue'], resolve)
        },
        {
            path: '/repair',
            name: 'Repair',
            component: resolve => require(['@/pages/repair/Index.vue'], resolve)
        },
        {
            path: '/zf/update',
            name: 'ZFUpdate',
            component: resolve => require(['@/pages/zf/Update.vue'], resolve)
        },
        {
            path: '/video/upload',
            name: 'VideoUpload',
            component: resolve => require(['@/pages/video/Upload.vue'], resolve)
        },
        {
            path: '/video/play/:id',
            name: 'VideoPlay',
            component: resolve => require(['@/pages/video/Play.vue'], resolve)
        },
        // 表白墙
        {
            path: '/lovewall',
            name: 'LoveWall',
            component: resolve => require(['@/pages/love_wall/Index.vue'], resolve)
        },
        {
            path: '/lovewall/add',
            name: 'LoveWallAdd',
            component: resolve => require(['@/pages/love_wall/Add.vue'], resolve)
        },
        {
            path: '/lovewall/view_comment/:id',
            name: 'LoveWallComment',
            component: resolve => require(['@/pages/love_wall/ViewComment.vue'], resolve)
        },
        {
            path: '/about',
            name: 'About',
            component: resolve => require(['@/pages/about/Index.vue'], resolve)
        },
        // 问答模块
        {
            path: '/qa',
            name: 'Qa',
            component: resolve => require(['@/pages/qa/Index.vue'], resolve)
        },
        {
            path: '/qa/add',
            name: 'QaAdd',
            component: resolve => require(['@/pages/qa/Add.vue'], resolve)
        },
        {
            path: '/qa/answer/:id',
            name: 'QaAdd',
            component: resolve => require(['@/pages/qa/Answer.vue'], resolve)
        },
        {
            path: '*',
            name: '404',
            component: resolve => require(['@/pages/404.vue'], resolve)
        },

    ]
})
