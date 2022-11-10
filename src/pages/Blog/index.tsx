/**
 * @About: 博客管理
 * @Author: lin-chung
 * @Date: 2022-11-10
 * @LastEditDate: 2022-11-10
 */

import React from 'react'
import List from './components/List'
import Search from './components/Search'

const Blog: React.FC = () => {
	return (
		<div className="blog-container">
			<Search />
			<List />
		</div>
	)
}

export default Blog
