import { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import "./index.scss";
export default function (props) {
  const { onClose, visible, title, children } = props;
  /** 返回 */
  //   function onClose() {}

  useEffect(() => {
    console.log(visible);
    
  }, [visible]);
  function onAnimationEnd() {
    console.log("onAnimationEnd");
  }
  return (
    <section
      className={[
        "tm-drawer absolute flex-view",
        visible ? "show-drawer" : "",
      ].join(" ")}
      onAnimationEnd={onAnimationEnd}
    >
      <header className="flex fxmiddle drawer-header bgfff pl5 shrink0">
        <Button onClick={onClose} type="link" size="small" className="shrink0 fcblue">
          <LeftOutlined className="" />返回
        </Button>
        <section className="drawer-title fxmiddle pl10 fsize14">{title || ""}</section>
      </header>
      <section className="drawer-content flex1 bgfff">{children}</section>
    </section>
  );
}
