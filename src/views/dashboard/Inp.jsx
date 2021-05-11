import React, { useState, useImperativeHandle } from "react";
import { Input } from 'antd'
function Inp({ cRef = null }) {
  const [value, setValue] = useState('');
  function onChange(e) {
    setValue(e.target.value)
  }
  useImperativeHandle(cRef, () => ({
    getValue: () => {
      return value
    }
  }))
  return (
    <section style={{"width": "180px"}}>
      <Input value={value} onChange={onChange} placeholder="輸入后点击按钮获取" allowClear></Input>
    </section>
  );
}
Inp.useInp = function () {
  return [{
    getValue: Inp
  }]
}
export default Inp
