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
import { menus } from './data'
import DropdownImtes from './DropdownImtes'
import reactImg from '../../assets/images/common/react.png'
import './style.less'

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState('home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <header className="navigation-container">
      <div className="navigation-container__wrap">
        <div className="navigation-container__wrap__logo">
          <img src={reactImg} width={30} />
          <span>React</span>
        </div>
        <div className="navigation-container__wrap__menu">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menus}
          />
        </div>
        <div className="navigation-container__wrap__setting">
          <Dropdown menu={{ items: DropdownImtes }}>
            <a onClick={(e) => e.preventDefault()}>
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
