/**
 * @About: 登录页面-扫码登录
 * @Author: lin-chung
 * @Date: 2022-11-09
 * @LastEditDate: 2022-11-09
 */

import React, { useState, useEffect, useRef } from 'react'
import { Row, Divider, Spin } from 'antd'

interface IQrcodeProps {
	setLoginType: Function
}

const Qrcode: React.FC<IQrcodeProps> = props => {
	const [loading, setLoading] = useState<boolean>(true)

	const timer = useRef<NodeJS.Timer>()

	// 组件挂载后开启定时器
	useEffect(() => {
		timer.current = setTimeout(() => {
			setLoading(false)
		}, 300)
	}, [])

	// 组件卸载前清空定时器
	useEffect(() => {
		return () => {
			clearTimeout(timer.current)
		}
	}, [])

	return (
		<React.Fragment>
			<div className="qrcode-login">
				<p className="qrcode-login__title">
					<span>请打开</span>
					<span style={{ color: '#538ff4', padding: '0 3px' }}>微信</span>
					<span>扫一扫登录</span>
					<span>（开发中，敬请期待...）</span>
				</p>
				{loading ? (
					<div className="qrcode-login__loading">
						<Spin size="large" tip="Loading..." />
					</div>
				) : (
					<div className="qrcode-login__img"></div>
				)}
			</div>
			<Row justify="center" align="middle" style={{ marginTop: '30px', fontSize: '14px' }}>
				<a type="link" onClick={() => props.setLoginType('account')}>
					密码登录
				</a>
				<Divider type="vertical" style={{ margin: '0 12px' }} />
				<a type="link">注册新账号</a>
			</Row>
		</React.Fragment>
	)
}

export default Qrcode
