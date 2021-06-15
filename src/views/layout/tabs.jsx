/** https://segmentfault.com/a/1190000020812860 */
import { Tabs } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './index.scss'
import { useLocation, useHistory } from 'react-router-dom'
import menus from './menus'
const { TabPane } = Tabs
export default function (props) {
	const location = useLocation()
	let history = useHistory()
	const { pathname } = location
	const [tabList, setTabList] = useState([
		{
			pathname: '/',
			icon: 'icon-dashboard',
			name: 'Dashboard'
		}
	])
	useEffect(() => {
		let have = tabList.find(tab => tab.pathname === pathname)
		if (!have) {
			let c = undefined
			function findit(menus) {
				for (let item of menus) {
					if (item.child) {
						findit(item.child)
					} else {
						if (item.path === pathname) {
							c = {
								...item,
								pathname: item.path
							}
							break
						}
					}
				}
			}
			findit(menus)
			if (c) {
				setTabList([...tabList, c])
			}
		}
	}, [pathname])
	function callback(val) {
		history.push(val)
	}
	function onEdit(val) {
		if (tabList.length > 1) {
			let temp = tabList.filter(tab => tab.pathname !== val)
			//   console.log(setTabList);
			setTabList(temp)
			if (val === pathname) {
				/** 如果删除的是当前查看的，回到删除后的最后一个 */
				//   console.log(history)
				history.replace(temp[0].pathname)
			}
		}
	}
	return (
		<Tabs
			className="tabs pt10 ml15 mr15 shrink0"
			size="small"
			onChange={callback}
			type="editable-card"
			activeKey={pathname}
			onEdit={onEdit}
		>
			{(tabList || []).map(tab => {
				return (
					<TabPane
						key={tab.pathname}
						tab={
							<span>
								<i className={['iconfont', tab.icon].join(' ')}></i>
								{tab.name}
							</span>
						}
					></TabPane>
				)
			})}
		</Tabs>
	)
}
