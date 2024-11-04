// src/App.js
import React, { useState } from "react";
import { Layout, Form, message } from "antd"; // Import Form here
import axios from "axios";

import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import DataForm from "./components/DataForm";
import DataTable from "./components/DataTable";

const { Content } = Layout;

const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const handleInsert = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/insertRecord",
        values
      );
      message.success("Data inserted successfully");
      form.resetFields();
    } catch (error) {
      message.error("Error inserting data");
    }
  };

  const fetchRecords = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getRecords");
      setData(res.data);
    } catch (error) {
      message.error("Error fetching data");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "City", dataIndex: "city", key: "city" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content style={{ padding: "0 50px", marginTop: 20 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <DataForm form={form} handleInsert={handleInsert} />
          <DataTable
            data={data}
            columns={columns}
            fetchRecords={fetchRecords}
          />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
