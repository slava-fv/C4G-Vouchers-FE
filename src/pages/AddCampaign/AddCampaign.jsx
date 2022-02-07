import React from "react";
import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";

import styles from "./AddCampaign.module.css";

const AddCampaign = ({ onCreateCampaign }) => {
  const rules = { required: true, message: "Please input the data!" };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
      requiredMark={true}
      className={styles.form}
      onFinish={onCreateCampaign}
    >
      <Form.Item
        name="campaignName"
        label="Prefix (Campaign Name)"
        rules={[{ ...rules }]}
      >
        <Input maxLength={10} />
      </Form.Item>
      <Form.Item name="dateFrom" label="DateFrom" rules={[{ ...rules }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="dateTo" label="DateTo" rules={[{ ...rules }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="amountOfVouchers"
        label="Amount of vouchers"
        rules={[{ ...rules }]}
      >
        <InputNumber min={1} max={100} />
      </Form.Item>
      <Form.Item name="amount" label="Amount of gift" rules={[{ ...rules }]}>
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item name="currency" label="Currency" rules={[{ ...rules }]}>
        <Select>
          <Select.Option value="$">$</Select.Option>
          <Select.Option value="€">€</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCampaign;
