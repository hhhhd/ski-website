import Vue from 'vue'
import Router from 'vue-router'
import actionSheet from '../components/actionSheet.vue'
import alert from '../components/alert.vue'
import badge from '../components/badge.vue'
import button from '../components/button.vue'
import checklist from '../components/checklist.vue'
import field from '../components/field.vue'
import header from '../components/header.vue'
import indicator from '../components/indicator.vue'
import loading from '../components/loading.vue'
import popup from '../components/popup.vue'
import prompt from '../components/prompt.vue'
import range from '../components/range.vue'
import search from '../components/search.vue'
import spinner from '../components/spinner.vue'
import swipe from '../components/swipe.vue'
import tabbar from '../components/tabbar.vue'
import tabContainer from '../components/tabContainer.vue'
import toast from '../components/toast.vue'
import index from '../components/index.vue'
import innovation from '../components/innovation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: index},
    {path: '/innovation', component: innovation},
    {path: '/actionSheet', component: actionSheet},
    {path: '/alert', component: alert},
    {path: '/badge', component: badge},
    {path: '/button', component: button},
    {path: '/checklist', component: checklist},
    {path: '/field', component: field},
    {path: '/header', component: header},
    {path: '/indicator', component: indicator},
    {path: '/loading', component: loading},
    {path: '/popup', component: popup},
    {path: '/prompt', component: prompt},
    {path: '/range', component: range},
    {path: '/search', component: search},
    {path: '/spinner', component: spinner},
    {path: '/swipe', component: swipe},
    {path: '/tabbar', component: tabbar},
    {path: '/tabContainer', component: tabContainer},
    {path: '/toast', component: toast}
  ]
})
