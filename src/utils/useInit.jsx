/** 分页配置 */
import { useState, useEffect } from "react";
export default function (get) {
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  /** 选中项和方法 */
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      console.log(selectedRowKeys)
      setSelectedRowKeys(selectedRowKeys);
    },
    setSelectedRowKeys,
  };
  /** 分页和方法 */
  const pagination = {
    showTotal: (total) => `Total ${total} items`,
    showQuickJumper: true,
    current: page,
    pageSize,
    onChange: (page) => {
      setPage(page);
    },
    onShowSizeChange: (page, sizes) => {
      setPageSize(sizes);
    },
    total,
  };

  useEffect(() => {
    get && get();
  }, [page, pageSize]);

  return {
    pagination,
    page,
    setPage,
    setPageSize,
    setTotal,
    data,
    setData,
    loading,
    setLoading,
    /** 多选 */
    rowSelection,
    /** 点击查询执行get方法，会设置页面为第一页 */
    init: () => {
      page === 1 ? get && get() : setPage(1);
    },
  };
}
