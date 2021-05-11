import React, { useState, useRef, useEffect } from "react";
import Inp from "./Inp";
import { Button } from "antd";
export default function () {
  /** 子组件ref */
  const inpRef = useRef();
  const [val, setVal] = useState("");
  /** 获取子组件输入框的值 */
  function showVal() {
    console.log("Input 输入值是：", inpRef.current.getValue());
    setVal(inpRef.current.getValue());
  }
  return (
    <section className="scroll-y height100">
      <div style={{ height: "1000px" }}>
        Dashboard
        <div className="flex pt10">
          <Inp cRef={inpRef}></Inp>
          <div className="pl15 fxmiddle">{val}</div>
        </div>
        <Button onClick={showVal} className="mt15" type="primary">
          获取
        </Button>
      </div>
    </section>
  );
}
