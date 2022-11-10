import React from 'react'
import type { MenuProps } from 'antd'

const DropdownImtes: MenuProps['items'] = [
	{
		label: (
			<a target="_blank" href="https://react.docschina.org" rel="noreferrer">
				React 官方中文文档
			</a>
		),
		key: '1'
	},
	{
		label: (
			<a target="_blank" href="https://pro.ant.design" rel="noreferrer">
				Ant Design Pro
			</a>
		),
		key: '2'
	},
	{
		label: '退出登录',
		key: '3'
	}
]

export default DropdownImtes
