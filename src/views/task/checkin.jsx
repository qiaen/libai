import React, { useState } from "react";
import { List, Avatar, message } from "antd";
import Tedrawer from "../../components/drawer/index";
import DetailInfo from "./compons/details";
export default function () {
  /** 控制抽屉组件显示 */
  const [visible, setVisible] = useState(false);
  const [currentData, setCurrentData] = useState({});
  /** 显示抽屉组件 */
  function showDrawer(item) {
    // console.log(item);
    setCurrentData(item);
    setVisible(true);
  }
  /** 关闭抽屉的回调 */
  function onClose(val) {
    // console.log("the drawe is close");
    setVisible(false);
  }
  /** 从详情页返回 */
  function detailBack(val) {
    message.success('保存成功！')
    setVisible(false)
  }
  return (
    <section className="scroll-y">
      <List
        dataSource={[
          {
            name: "Lily",
            note: "Hi, Im Lily",
            gender: "female",
            id: 1,
          },
          {
            name: "Micle",
            note: "Hi, Im Micle",
            gender: "man",
            id: 2,
          },
          {
            name: "Cissy",
            note: "Hi, Im Cissy",
            gender: "other",
            id: 3,
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
        <DetailInfo data={currentData} back={detailBack} />
      </Tedrawer>
    </section>
  );
}
