import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import LazyLoad from '../LazyLoad'
import { RouteObject } from '../typings'

const about: RouteObject[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/about',
				element: LazyLoad(React.lazy(() => import(/* webpackChunkName: "about" */ '@/pages/About'))),
				meta: {
					title: '关于我',
					key: 'about'
				}
			}
		]
	}
]

export default about
