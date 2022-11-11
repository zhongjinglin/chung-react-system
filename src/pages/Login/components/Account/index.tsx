/**
 * @About: 登录页面-账号登录
 * @Author: lin-chung
 * @Date: 2022-11-09
 * @LastEditDate: 2022-11-09
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Row, Divider, notification } from 'antd'
import type { LoginForm } from '../../typings'
import { userInfo } from '../../data'
import { HOME_URL } from '@/global/constant'

const Account = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const navigate = useNavigate()

	const onFinish = (loginForm: LoginForm) => {
		notification.destroy()
		const { username, password } = loginForm
		if (username === userInfo.account && password === userInfo.password) {
			setLoading(true)
			setTimeout(() => {
				notification.success({
					top: 80,
					message: '提示消息',
					description: `${username} 恭喜你，登录成功`
				})
				setLoading(false)
				navigate(HOME_URL)
			}, 600)
		} else {
			notification.error({
				top: 20,
				message: '提示消息',
				description: '用户名或密码错误，登录失败'
			})
		}
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<React.Fragment>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
					<Input size="large" placeholder={`用户名：${userInfo.account}`} />
				</Form.Item>

				<Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
					<Input.Password size="large" placeholder={`密码：${userInfo.password}`} />
				</Form.Item>

				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>30天免登录</Checkbox>
				</Form.Item>

				<Form.Item>
					<Button type="primary" size="large" block loading={loading} htmlType="submit">
						登录
					</Button>
				</Form.Item>

				<Row justify="center" align="middle">
					<a type="link">忘记密码</a>
					<Divider type="vertical" style={{ margin: '0 12px' }} />
					<a type="link">注册新账号</a>
				</Row>
			</Form>
		</React.Fragment>
	)
}

export default Account
