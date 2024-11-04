import React from "react";
import { Form, Input, Button } from "antd";

const DataForm = ({ form, handleInsert }) => (
  <Form
    form={form}
    layout="vertical"
    onFinish={handleInsert}
    style={{ marginBottom: 20 }}
  >
    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
      <Input placeholder="Enter name" />
    </Form.Item>
    <Form.Item name="age" label="Age" rules={[{ required: true }]}>
      <Input type="number" placeholder="Enter age" />
    </Form.Item>
    <Form.Item name="city" label="City" rules={[{ required: true }]}>
      <Input placeholder="Enter city" />
    </Form.Item>
    <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
      Insert Data
    </Button>
  </Form>
);

export default DataForm;
