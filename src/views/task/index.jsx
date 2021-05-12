import React, { useEffect, useState } from "react";
import { Table, Button, Badge, Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Page from './page'
import "./index.scss";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "170px",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "70px",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "120px",
    render: (text) => (
      <span>
        <Badge status="success" />
        {text}
      </span>
    ),
  },
  {
    title: "Set",
    dataIndex: "set",
    width: "120px",
    render: () => (
      <Button type="primary" size="small">
        Publish
      </Button>
    ),
  },
];

export default function () {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const pagination = Page()
  const {page, pageSize, setPage} = pagination
  /** 分页相关 开始 */
  // const [pageSize, setPageSize] = useState(20);
  // const [page, setPage] = useState(1);
  // const pagination = {
  //   current: page,
  //   pageSize,
  //   onChange: (page) => {
  //     setPage(page);
  //   },
  //   onShowSizeChange: (page, sizes) => {
  //     setPageSize(sizes);
  //   },
  // };
  /** 分页相关 结束 */
  /** 选中项和方法 */
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };
  /** 加载数据，初始化 */
  function init() {
    page === 1 ? get() : setPage(1);
  }
  /** 制造数据 */
  function get() {
    setLoading(true);
    const data = [];
    const p = {
      page,
      ...form.getFieldsValue(),
    };
    for (let i = 0; i < 66; i++) {
      data.push({
        key: i,
        name: p.name ? `Cissy ${p.name}` : `Edward King ${i}`,
        age: parseInt(100 * Math.random()),
        status: p.status || "all",
        address: `London, Park Lane no. ${i}`,
      });
    }
    setTimeout(() => {
      setLoading(false);
      setData(data);
    }, 300);
  }
  useEffect(() => {
    get();
  }, [page, pageSize]);
  return (
    <section className="task height100 flex-view">
      <Form
        className="pb12 shrink0"
        form={form}
        layout="inline"
        onFinish={init}
        initialValues={{
          name: "",
          status: "",
        }}
      >
        <Form.Item name="name" label="用户名">
          <Input style={{ width: 140 }} placeholder="Name / Age"></Input>
        </Form.Item>
        <Form.Item name="status" label="状态">
          <Select style={{ width: 120 }}>
            <Select.Option value="">all</Select.Option>
            <Select.Option value="finished">finished</Select.Option>
            <Select.Option value="running">running</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            icon={<SearchOutlined />}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table
        className="zm-table"
        loading={loading}
        scroll={{ x: 760, y: 0 }}
        pagination={pagination}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </section>
  );
}
