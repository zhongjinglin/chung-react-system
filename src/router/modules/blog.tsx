import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import Blog from '../../pages/Blog'
import { RouteObject } from '../typings'

const blog: RouteObject[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/blog',
				element: <Blog />,
				meta: {
					title: '博客管理',
					key: 'blog'
				}
			}
		]
	}
]

export default blog
