import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import LazyLoad from '../LazyLoad'
import { RouteObject } from '../typings'

const blog: RouteObject[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/blog',
				element: LazyLoad(React.lazy(() => import(/* webpackChunkName: "blog" */ '@/pages/Blog'))),
				meta: {
					title: '博客管理',
					key: 'blog'
				}
			}
		]
	}
]

export default blog
