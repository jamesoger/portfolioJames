import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import ContactView from '../views/ContactView.vue'
import DesignView from '../views/DesignView.vue'
import WebView from '../views/WebView.vue'
import DesignIdView from '../views/DesignIdView.vue'
import WebIdView from '../views/WebIdView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
   {
    path: '/projets/design',
    name: 'design',
    component: DesignView
  },
  {
    path: '/projets/design/:id',
    name: 'design-id',
    component: DesignIdView,
    props: true
  },
  {
    path: '/projets/web',
    name: 'web',
    component: WebView
  },
  {
    path: '/projets/web/:id',
    name: 'web-id',
    component: WebIdView
  },
  ]
})

export default router
