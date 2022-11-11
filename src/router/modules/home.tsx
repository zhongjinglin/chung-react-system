import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import LazyLoad from '../LazyLoad'
import { RouteObject } from '../typings'

const home: RouteObject[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/home',
				element: LazyLoad(React.lazy(() => import(/* webpackChunkName: "home" */ '@/pages/Home'))),
				meta: {
					title: '首页',
					key: 'home'
				}
			}
		]
	}
]

export default home
