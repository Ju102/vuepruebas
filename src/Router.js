import HomeComponent from './components/HomeComponent'
import HalloweenComponent from './components/HalloweenComponent'
import ChristmasComponent from './components/ChristmasComponent'
import NewyearComponent from './components/NewyearComponent'

import { createRouter, createWebHistory } from 'vue-router'

const Routes = [
    { path: "/", component: HomeComponent},
    { path: "/halloween", component: HalloweenComponent },
    { path: "/christmas", component: ChristmasComponent },
    { path: "/newyear", component: NewyearComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes: Routes
})

export default router;