/**
 * @About: 登录页面-账号登录
 * @Author: lin-chung
 * @Date: 2022-11-09
 * @LastEditDate: 2022-11-09
 */

import React from 'react'
import { Button, Checkbox, Form, Input, Row, Divider } from 'antd'

export default () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
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
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input size="large" placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password size="large" placeholder="请输入密码" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>30天免登录</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
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
