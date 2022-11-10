import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from './typings'
import { combineAllRoutes } from './utils'
import Login from '../pages/Login'

// 导入所有router
import home from './modules/home'
import blog from './modules/blog'
import about from './modules/about'

// 处理路由
const routerArray: RouteObject[] = combineAllRoutes([home, blog, about])

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
