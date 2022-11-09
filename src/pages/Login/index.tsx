/**
 * @About: 登录页面
 * @Author: lin-chung
 * @Date: 2022-11-09
 * @LastEditDate: 2022-11-09
 */

import React, { useState } from 'react'
import { Tooltip } from 'antd'
import Account from './Account'
import Qrcode from './Qrcode'
import { loginTypes } from './data'
import './style.less'

export type LoginType = 'account' | 'qrcode'

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<LoginType>('account')

  // 切换登录方式
  const toggleType = () => {
    if (loginType === 'account') setLoginType('qrcode')
    if (loginType === 'qrcode') setLoginType('account')
  }

  return (
    <div className="login-container">
      <div className="login-container__form">
        <Tooltip placement="rightTop" title={loginTypes[loginType].tip}>
          <div
            className={`login-container__form__type ${loginTypes[loginType].className}`}
            onClick={toggleType}
          ></div>
        </Tooltip>

        <h2 className="login-container__form__title">
          {loginTypes[loginType].title}
        </h2>
        <div className="login-container__form__wrap">
          {loginType === 'account' ? (
            <Account />
          ) : (
            <Qrcode setLoginType={setLoginType} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
