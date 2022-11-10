import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import About from '../../pages/About'
import { RouteObject } from '../typings'

const about: RouteObject[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/about',
				element: <About />,
				meta: {
					title: '关于我',
					key: 'about'
				}
			}
		]
	}
]

export default about
