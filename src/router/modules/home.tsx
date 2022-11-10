import React from 'react'
import { LayoutIndex } from '../constant'
import Home from '../../pages/Home'
import { RouteObject } from '../typings'

const home: RouteObject[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

export default home
