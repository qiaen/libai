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
    <section className="pt10" style={{"width": "180px"}}>
      <Input value={value} onChange={onChange} placeholder="輸入後獲取"></Input>
    </section>
  );
}
Inp.useInp = function () {
  return [{
    getValue: Inp
  }]
}
export default Inp
