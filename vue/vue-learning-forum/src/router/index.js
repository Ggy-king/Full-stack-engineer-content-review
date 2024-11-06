import Vue from 'vue'
import VueRouter from 'vue-router'

import PublishPage from '@/views/PublishPage.vue'
import LikePage from '@/views/LikePage.vue'
import PersonInformation from '@/views/PersonInformation.vue'
import ShareForum from '@/views/ShareForum.vue'
import ShowPage from '@/views/ShowPage.vue'
import NotFound from '@/views/NotFound.vue'



Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/forum' },
        { name: 'forum', path: '/forum', component: ShareForum },
        { name: 'publish', path: '/publish', component: PublishPage },
        { name: 'like', path: '/like', component: LikePage },
        { name: 'person', path: '/person', component: PersonInformation },
        { name: 'show', path: '/show/:id', component: ShowPage },
        { name: 'not', path: '*', component: NotFound },

    ],
    mode: 'history',
    linkActiveClass: 'link-active'
})

export default router