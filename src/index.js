import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './assets/css/base.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
// axios请求相关前置，拦截，超时等预处理
import './configs/axios.js'
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
