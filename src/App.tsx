import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Router from './router'
import './App.less'

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
