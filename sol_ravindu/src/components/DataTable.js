import React from "react";
import { Table, Button } from "antd";

const DataTable = ({ data, columns, fetchRecords }) => (
  <div style={{ marginBottom: 20 }}>
    <Button type="default" onClick={fetchRecords} style={{ marginBottom: 20 }}>
      Retrieve Data
    </Button>
    <Table dataSource={data} columns={columns} rowKey="id" />
  </div>
);

export default DataTable;
