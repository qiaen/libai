import React, { useState } from "react";
import { Table, Button, Badge } from "antd";
import './index.scss'
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width:"170px"
  },
  {
    title: "Age",
    dataIndex: "age",
    width:"70px"
  },
  {
    title: "Address",
    dataIndex: "address",
    width:"270px"
  },
  {
    title: "Status",
    dataIndex:"status",
    render: () => (
      <span>
        <Badge status="success" />
        Finished
      </span>
    )
  },
  {
    title: "Set",
    dataIndex:"set",
    width: "120px",
    render: () => (
      <Button type="primary" size="small">Publish</Button>
    )
  }
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: parseInt(100 * Math.random()),
    address: `London, Park Lane no. ${i}`,
  });
}
export default function () {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  /** 选中项和方法 */
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };
  return (
    <section className="task height100">
      <Table className="zm-table"  scroll={{ x: 0, y: 0 }} pagination={{ pageSize: 20 }}  rowSelection={rowSelection} columns={columns} dataSource={data} />
    </section>
  );
}
