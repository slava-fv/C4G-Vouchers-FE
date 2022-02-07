import React from "react";
import { Button as ANTButton, Popconfirm as ANTPopconfirm } from "antd";
import { DeleteOutlined as ANTDeleteOutlined } from "@ant-design/icons";
import moment from "moment";

import { Table } from "components";

const VouchersList = ({
  loading,
  meta,
  vouchers,
  voucherIdDeleting,
  sortBy,
  direction,
  handlePageAndSortChange,
  setPage,
  handleVoucherDelete,
}) => {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      sorter: true,
      sortOrder: sortBy === "code" && direction,
      showSorterTooltip: false,
      width: "20%",
    },
    {
      title: "From",
      dataIndex: "dateFrom",
      sorter: true,
      sortOrder: sortBy === "dateFrom" && direction,
      showSorterTooltip: false,
      render: (dateFrom) => (
        <span>
          {moment(dateFrom, "DD.MM.YYYY HH:mm:ss ZZ").format(
            "DD.MM.YYYY HH:mm:ss"
          )}
        </span>
      ),
    },
    {
      title: "To",
      dataIndex: "dateTo",
      sorter: false,
      sortOrder: sortBy === "dateTo" && direction,
      showSorterTooltip: false,
      render: (dateTo) => (
        <span>
          {moment(dateTo, "DD.MM.YYYY HH:mm:ss ZZ").format(
            "DD.MM.YYYY HH:mm:ss"
          )}
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (amount, data) => <span>{`${data.currency}${amount}`}</span>,
      sorter: true,
      sortOrder: sortBy === "amount" && direction,
      showSorterTooltip: false,
    },
    {
      title: "Status",
      dataIndex: "isEnabled",
      render: (isEnabled) => <span>{isEnabled ? "Enabled" : "Disabled"}</span>,
      sorter: true,
      sortOrder: sortBy === "status" && direction,
      showSorterTooltip: false,
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id, data) => (
        <ANTPopconfirm
          placement="topRight"
          title={"Are you sure?"}
          onConfirm={() => handleVoucherDelete(id)}
          okText="Yes"
          cancelText="No"
        >
          <ANTButton
            style={{ marginLeft: 5 }}
            loading={id === voucherIdDeleting ? true : false}
            type="default"
            icon={<ANTDeleteOutlined />}
            size={"large"}
          />
        </ANTPopconfirm>
      ),
      sorter: false,
    },
  ];

  return (
    <Table
      loading={loading}
      scroll={{ y: window.innerHeight - 275, x: 720 }}
      pagination={meta}
      columns={columns}
      dataSource={vouchers}
      rowKey={(record) => record.id}
      onPageAndSortChange={handlePageAndSortChange}
      // currentRowsNumber={getCountInfo(meta, "vouchers")}
    />
  );
};

export default VouchersList;
