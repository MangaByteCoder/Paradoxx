import SponsorsView from '@/views/SponsorsView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import AnnouncementView from '../views/AnnouncementView.vue'
import FAQview from '../views/FAQview.vue'
import ContactUs from '../views/ContactUs.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: SponsorsView
    },
    {
      path: '/annoucements',
      name: 'Announcements',
      component: AnnouncementView
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQview
    },
    {
      path: '/contactus',
      name: 'Contact Us',
      component: ContactUs
    }
  ]
})

export default router
