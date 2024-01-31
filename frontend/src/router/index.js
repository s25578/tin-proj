import { createRouter, createWebHistory } from 'vue-router'
import AllPlanetsView from '../views/AllPlanetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllPlanetsView
    },
    {
      path: '/:id',
      name: 'PlanetInfo',
      component: () => import('../views/PlanetInfoView.vue')
    },
    {
      path: '/add',
      name: 'AddPlanet',
      component: () => import('../views/AddPlanetView.vue')
    }
  ]
})

export default router
