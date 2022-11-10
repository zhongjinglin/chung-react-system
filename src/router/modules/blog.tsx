import React from 'react'
import { LayoutIndex } from '../constant'
import Blog from '../../pages/Blog'
import { RouteObject } from '../typings'

const blog: RouteObject[] = [
	{
		element: <LayoutIndex />,
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
