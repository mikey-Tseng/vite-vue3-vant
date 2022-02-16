import {createRouter, createWebHashHistory} from "vue-router";
import Demo from '../views/Demo.vue'
import Mine from '../views/Mine.vue'
const routes = [
    {path: '/',redirect:'/home'},
    { path: '/home', component: Demo },
    { path: '/home/mine', component: Mine },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transitionName = toDepth < fromDepth ? 'slide-out' : 'slide-in'
})
export default router
