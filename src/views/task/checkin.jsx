import React, { useState } from "react";
import { List, Avatar } from "antd";
import Tedrawer from '../../components/drawer/index'
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";
export default function () {
  /** 控制抽屉组件显示 */
  const [visible, setVisible] = useState(false);
  const [currentData,setCurrentData] =useState({})
  /** 显示抽屉组件 */
  function showDrawer(item) {
      console.log(item)
      setCurrentData(item)
    setVisible(true);
  }
  /** 关闭抽屉的回调 */
  function onClose(val) {
    console.log("the drawe is close");
    setVisible(false);
  }
  return (
    <section className="scroll-y">
      <List
        dataSource={[
          {
            name: "Lily",
            id: 1,
          },
          {
            name: "Micle",
            id: 2,
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer.bind(null, item)} key={`a-${item.id}`}>
                View Profile
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <Tedrawer onClose={onClose} visible={visible} title={currentData.name}>
          <div className="pad12" style={{height: '1200px'}}>
              你好，我在checkin被打开
          </div>
      </Tedrawer>
    </section>
  );
}
