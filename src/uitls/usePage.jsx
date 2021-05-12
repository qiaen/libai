import { useState } from "react";
export default function () {
  /** 分页相关 开始 */
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const pagination = {
    current: page,
    pageSize,
    onChange: (page) => {
      setPage(page);
    },
    onShowSizeChange: (page, sizes) => {
      setPageSize(sizes);
    },
    page,
    setPage,
    setPageSize
  };
  return pagination
}
