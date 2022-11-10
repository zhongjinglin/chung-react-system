/**
 * @About: BaseLayout
 * @Author: lin-chung
 * @Date: 2022-11-10
 * @LastEditDate: 2022-11-10
 */

import React from 'react'
import Navigation from '../Navigation'
import './style.less'

const BaseLayout: React.FC = () => {
  return (
    <div className="base-layout-container">
      <Navigation />
      <section className="base-layout-container__content"></section>
    </div>
  )
}

export default BaseLayout
