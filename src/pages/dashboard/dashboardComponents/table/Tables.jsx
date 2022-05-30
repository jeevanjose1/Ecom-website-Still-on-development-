import React from "react";
import { TablesStyle } from "./tablesStyle";
import Table from "./tableComponents/Table.jsx";
const Tables = () => {
  return (
    <TablesStyle>
      <tbody>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </tbody>
    </TablesStyle>
  );
};

export default Tables;
