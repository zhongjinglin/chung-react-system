/**
 * @About: 博客管理-搜索
 * @Author: lin-chung
 * @Date: 2022-11-10
 * @LastEditDate: 2022-11-10
 */

import React from 'react'
import { Button, Form, Input } from 'antd'

const Search: React.FC = () => {
	const [form] = Form.useForm()

	return (
		<Form layout="inline" form={form} className="search-wrap">
			<Form.Item label="name">
				<Input placeholder="input placeholder" />
			</Form.Item>
			<Form.Item label="address">
				<Input placeholder="input placeholder" />
			</Form.Item>
			<Form.Item>
				<Button type="primary">Search</Button>
			</Form.Item>
		</Form>
	)
}

export default Search
