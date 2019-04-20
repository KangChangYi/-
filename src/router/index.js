import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/login/login.vue'),
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/index/index.vue'),
            redirect: 'wholeAnalysis',
            children: [
                {
                    path: '/seeBoard',
                    name: 'seeBoard',
                    component: () => import('../views/index/components/seeBoard/seeBoard.vue'),
                },
                {
                    path: '/receiveVisitor',
                    name: 'receiveVisitor',
                    component: () => import('../views/index/components/receiveVisitor/receiveVisitor.vue'),
                },
                {
                    path: '/wholeAnalysis',
                    name: 'wholeAnalysis',
                    component: () => import('../views/index/components/wholeAnalysis/wholeAnalysis.vue'),
                },
                {
                    path: '/flowAnalysis',
                    name: 'flowAnalysis',
                    component: () => import('../views/index/components/flowAnalysis/flowAnalysis.vue'),
                },
                {
                    path: '/terminalAnalysis',
                    name: 'terminalAnalysis',
                    component: () => import('../views/index/components/terminalAnalysis/terminalAnalysis.vue'),
                },
                {
                    path: '/eventAnalysis',
                    name: 'eventAnalysis',
                    component: () => import('../views/index/components/eventAnalysis/eventAnalysis.vue'),
                },
                {
                    path: '/funnelAnalysis',
                    name: 'funnelAnalysis',
                    component: () => import('../views/index/components/funnelAnalysis/funnelAnalysis.vue'),
                },
                {
                    path: '/retainAnalysis',
                    name: 'retainAnalysis',
                    component: () => import('../views/index/components/retainAnalysis/retainAnalysis.vue'),
                },
                {
                    path: '/userGroup',
                    name: 'userGroup',
                    component: () => import('../views/index/components/userGroup/userGroup.vue'),
                },
                {
                    path: '/userPortrait',
                    name: 'userPortrait',
                    component: () => import('../views/index/components/userPortrait/userPortrait.vue'),
                },
            ],
        },
    ],
});
