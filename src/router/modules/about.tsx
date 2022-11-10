import React from 'react'
import { LayoutIndex } from '../constant'
import About from '../../pages/About'
import { RouteObject } from '../typings'

const about: RouteObject[] = [
	{
		element: <LayoutIndex />,
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
