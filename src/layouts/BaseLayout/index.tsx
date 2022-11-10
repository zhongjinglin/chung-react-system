/**
 * @About: BaseLayout
 * @Author: lin-chung
 * @Date: 2022-11-10
 * @LastEditDate: 2022-11-10
 */

import React from 'react'
import Navigation from '../Navigation'
import './style.less'
import { Outlet } from 'react-router-dom'

const BaseLayout: React.FC = () => {
  return (
    <div className="base-layout-container">
      <Navigation />
      <section className="base-layout-container__content">
        <Outlet />
      </section>
    </div>
  )
}

export default BaseLayout
