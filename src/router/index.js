import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DefaultLayout from '@/layouts/Default'
import HomePage from '@/views/Home'
import AddPhone from '@/views/AddPhone'
import EditPhone from '@/views/EditPhone'

const routes = [
	{
		path: '',
		component: DefaultLayout,
		children: [
			{
				path: '',
				name: 'home-page',
				component: HomePage
			},
			{
				path: 'add-phone',
				name: 'add-new-phone',
				component: AddPhone
			},
			{
				path: 'edit-phone/:id',
				name: 'edit-phone',
				component: EditPhone
			}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
