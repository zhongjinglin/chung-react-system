import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import Home from '../../pages/Home'
import { RouteObject } from '../typings'

const home: RouteObject[] = [
	{
		element: <BaseLayout />,
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
