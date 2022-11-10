/**
 * @About: 导航
 * @Author: lin-chung
 * @Date: 2022-11-10
 * @LastEditDate: 2022-11-10
 */

import React, { useState } from 'react'
import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LOGIN_URL } from '../../global/constant'
import DropdownImtes from './DropdownImtes'
import { menus } from './data'
import reactImg from '../../assets/images/common/react.png'
import './style.less'

const Navigation: React.FC = () => {
	const [current, setCurrent] = useState('home')
	const navigate = useNavigate()

	// 点击导航
	const onNavClick: MenuProps['onClick'] = e => {
		setCurrent(e.key)
		navigate(`/${e.key}`)
	}

	// 点击设置
	const onSettingClick: MenuProps['onClick'] = ({ key }) => {
		if (key === 'login-out') {
			navigate(LOGIN_URL)
		}
	}

	return (
		<header className="navigation-container">
			<div className="navigation-container__wrap">
				<div className="navigation-container__wrap__logo">
					<img src={reactImg} width={30} />
					<span>React</span>
				</div>
				<div className="navigation-container__wrap__menu">
					<Menu onClick={onNavClick} selectedKeys={[current]} mode="horizontal" items={menus} />
				</div>
				<div className="navigation-container__wrap__setting">
					<Dropdown menu={{ items: DropdownImtes, onClick: onSettingClick }}>
						<a onClick={e => e.preventDefault()}>
							<Space>
								admin
								<DownOutlined style={{ fontSize: '15px' }} />
							</Space>
						</a>
					</Dropdown>
				</div>
			</div>
		</header>
	)
}

export default Navigation
