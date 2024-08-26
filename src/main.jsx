import React from 'react'
import ReactDOM from 'react-dom/client'
// 路由
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
// 样式
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
