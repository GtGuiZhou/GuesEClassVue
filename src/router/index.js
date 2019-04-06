import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // 当页面切换时滚动条处于什么位置
    scrollBehavior() {
        return { x: 0, y: 0 } // 最上、最左边
    },
    routes: [
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
            path: '/zf',
            name: 'ZF',
            component: resolve => require(['@/pages/zf/Index.vue'], resolve)
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
            path: '*',
            name: '404',
            component: resolve => require(['@/pages/404.vue'], resolve)
        },
    ]
})
