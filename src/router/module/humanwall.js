export default [
    {
        path: '/humanwall',
        name: 'Humanwall',
        component: resolve => require(['@/pages/humanwall/Index.vue'], resolve)
    },
    {
        path: '/humanwall/add',
        name: 'HumanwallAdd',
        component: resolve => require(['@/pages/humanwall/Add.vue'], resolve)
    },
    {
        path: '/humanwall/viewcomment/:id',
        name: 'Humanwall',
        component: resolve => require(['@/pages/humanwall/ViewComment.vue'], resolve)
    },
]
