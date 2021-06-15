import React, { useState } from 'react'

import { Layout, Menu } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import menus from './menus'
import Tabs from './tabs'
import './index.scss'
import useMenu from '../../router/useMenu'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
function App(props) {
	/**hash, pathname, search, state  */
	const { pathname } = useLocation()
	const [collapsed, setCollapsed] = useState(localStorage.liBaiCollapsed === 'true' ? true : false)
	function toggle() {
		let a = !collapsed
		setCollapsed(a)
		localStorage.liBaiCollapsed = a
	}
	const defaultOpenKeys = [pathname.includes('task') ? '/task' : undefined]
	const [ms, setMenu] = useMenu([])
	return (
		<Layout className="height100 layout">
			<Sider collapsedWidth="60" trigger={null} collapsible collapsed={collapsed} className="menu">
				<div className="width100 menu-logo">
					<a className="fxmiddle flex hideit height100">
						<img className="pl10" src="https://lanling.diumx.com/img/lan-2.af005ed3.png" alt="" />
						{collapsed ? null : (
							<div className="fcfff pl5 shrink0" style={{ width: '110px' }}>
								<p className="fbold fsize14">李白</p>
								<p className="fsize11">后台管理系统模版</p>
							</div>
						)}
					</a>
				</div>
				<Menu
					defaultSelectedKeys={pathname}
					selectedKeys={[pathname]}
					defaultOpenKeys={defaultOpenKeys}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
				>
					{menus.map(item => {
						return item.child ? (
							<SubMenu
								key={item.path}
								icon={<i className={item.icon + ' ant-menu-item-icon'}></i>}
								title={item.name}
							>
								{item.child.map(ch => {
									return (
										<Menu.Item key={ch.path} icon={<i className={ch.icon}></i>}>
											<a href={`/#${ch.path}`} rel="noopener noreferrer">
												{ch.name}
											</a>
										</Menu.Item>
									)
								})}
							</SubMenu>
						) : (
							<Menu.Item key={item.path} icon={<i className={item.icon}></i>}>
								<a href={`/#${item.path}`} rel="noopener noreferrer">
									{item.name}
								</a>
							</Menu.Item>
						)
					})}
				</Menu>
			</Sider>

			<Layout>
				<Header className="bgfff fxmiddle">
					<span onClick={toggle} className="pointer">
						{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</span>
				</Header>
				<Tabs />
				<Content className="main-content relative">
					{/*路由*/}
					{/* <RouterView></RouterView> */}
					{props.children}
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
