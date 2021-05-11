import { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./index.scss";
export default function (props) {
  const { onClose, visible, title, children } = props;
  const [key, setKey] = useState(1);
  useEffect(() => {
    /**销毁内部组件 */
    if (visible) {
      setKey(key + 1);
    }
  }, [visible]);
  /** 动画结束 */
  function onTransitionEnd(event) {
    if (!visible && event.target.classList.contains("tm-drawer")) {
      console.log(key);
      setKey(key + 1);
    }
  }
  return (
    <section
      className={[
        "tm-drawer absolute flex-view",
        visible ? "show-drawer" : "",
      ].join(" ")}
      // onTransitionEnd={onTransitionEnd}
    >
      <header className="flex fxmiddle drawer-header bgfff pl5 shrink0">
        <Button
          onClick={onClose}
          type="link"
          size="small"
          className="shrink0 fcblue"
        >
          <LeftOutlined className="" />
          返回
        </Button>
        <section className="drawer-title fxmiddle pl10 fsize14">
          {title || ""}
        </section>
      </header>
      <section className="drawer-content flex1 bgfff" key={key}>
        {children}
      </section>
    </section>
  );
}
