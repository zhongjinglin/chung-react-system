import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from './typings'
import { combineAllRoutes } from './utils'
import Login from '@/pages/Login'

// 导入所有router
import Home from './modules/Home'
import Blog from './modules/Blog'
import About from './modules/About'

// 处理路由
const routerArray: RouteObject[] = combineAllRoutes([Home, Blog, About])

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			title: '登录页面',
			key: 'login'
		}
	},
	...routerArray
]

const Routes = () => useRoutes(routes)

export default Routes
