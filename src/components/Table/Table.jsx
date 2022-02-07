import React from "react";
import { Table as ANTTable } from "antd";

import styles from "./Table.module.css";
import "./Table.css";

const Table = ({
  loading = false,
  pagination,
  columns,
  dataSource,
  onPageAndSortChange,
  scroll,
  rowClassName,
  currentRowsNumber,
  rowKey,
  rowSelection,
  onRow,
}) => {
  const paginationCustom = pagination
    ? {
        current: pagination.page + 1,
        total: pagination.itemsCount,
        pageSize: pagination.pageSize,
        showSizeChanger: false,
      }
    : false;

  return (
    <div className={styles.tableWrapper}>
      <ANTTable
        loading={loading}
        rowClassName={rowClassName}
        rowSelection={rowSelection && rowSelection}
        pagination={paginationCustom}
        columns={columns}
        dataSource={dataSource}
        scroll={scroll}
        onChange={onPageAndSortChange}
        rowKey={rowKey}
        onRow={onRow}
      />
      <div
        className={styles.pages}
        style={{
          marginTop: pagination && currentRowsNumber ? -55 : 0,
        }}
      >
        <div className={styles.currentStats}>
          <div className={styles.rowsAreShown}>{currentRowsNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
