import React, { useState } from "react";
import RouterView from "../../router/index.jsx";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  SettingFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import menus from "./menus";
import Tabs from './tabs'
import "./index.scss";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
function App(props) {
  const [collapsed, setCollapsed] = useState(false);
  function toggle() {
    let a = !collapsed;
    setCollapsed(a);
  }
  /**控制菜单折叠*/
  function isCollapsed() {
    return collapsed ? "menu-unfold" : "menu-fold";
  }
  // 点击菜单
  function onTap(item) { }
  return (
    <Layout className="height100 layout">
      <Sider collapsedWidth="60" trigger={null} collapsible collapsed={collapsed}>
        <div className="width100 menu-logo">
          <a className="fxmiddle flex hideit height100">
            <img
              className="pl10"
              src="https://lanling.diumx.com/img/lan-2.af005ed3.png"
              alt=""
            />
            {collapsed ? null : (
              <div className="fcfff pl5 shrink0" style={{ width: '110px' }}>
                <p className="fbold fsize14">李白</p>
                <p className="fsize11">后台管理系统模版</p>
              </div>
            )}
          </a>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <a href="/#/" rel="noopener noreferrer">
              Dashboard
            </a>
          </Menu.Item>

          <SubMenu key="sub1" icon={<MailOutlined />} title="任务管理">
            <Menu.Item key="5">创建任务</Menu.Item>
            <Menu.Item key="6">任务列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            用户管理
          </Menu.Item>
          <Menu.Item key="report" icon={<ContainerOutlined />}>
            <a href="/#/report" rel="noopener noreferrer">
              报表管理
            </a>
          </Menu.Item>
          <Menu.Item key="about" icon={<MenuFoldOutlined />}>
            <a href="/#/about" rel="noopener noreferrer">
              关于
            </a>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className="bgfff fxmiddle">
          <span onClick={toggle} className="pointer">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <Tabs />
        <Content className="main-content">
          
          {/*路由*/}
          <RouterView></RouterView>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
