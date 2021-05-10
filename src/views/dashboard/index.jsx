import React, { useState, useRef } from "react";
import Inp from './Inp'
import { Button } from 'antd'
export default function () {
  const blogRef = useRef();
  function showVal() {
    console.log('Input 輸入的值是：', blogRef.current.getValue())
  }
  return (
    <section className="scroll-y">
      <div style={{ height: "1000px" }}>
        Dashboard
        <Inp cRef={blogRef}></Inp>
        <Button onClick={showVal} className="mt15" type="primary">獲取</Button>
      </div>
    </section>
  );
}
