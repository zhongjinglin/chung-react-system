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
import reactImg from '../../assets/images/common/react.png'
import './style.less'

const items: MenuProps['items'] = [
  {
    label: (
      <a target="_blank" href="https://react.docschina.org">
        React 官方中文文档
      </a>
    ),
    key: '1'
  },
  {
    label: (
      <a target="_blank" href="https://pro.ant.design">
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

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState('blog')

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
          <Dropdown menu={{ items }}>
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
