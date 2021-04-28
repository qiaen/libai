import { Tabs } from "antd"
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import "./index.scss";
const { TabPane } = Tabs
export default function () {
    function callback(val) {

    }
    return <Tabs className="tabs pt10 pb10 ml15 mr15" size="small" onChange={callback} type="card">
        <TabPane tab={
            <span><AppleOutlined />Dashboard</span>
        } key="1"></TabPane>
        <TabPane tab={
            <span><AndroidOutlined />報表管理</span>
        } key="2"></TabPane>
    </Tabs>
}