import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import Dropdown from "../../../../../components/dropdown/Dropdown.jsx";
import { TableStyle } from "./tableStyle";

const Table = () => {
  return (
    <TableStyle>
      <td className="customer-number">2233</td>
      <td className="name">Jeevan jose</td>
      <td className="email">jeevanjose222@gmail.com</td>
      <td className="amount">$115</td>
      <td className="isdeliverd">
        <span>Deleverd</span>
      </td>
      <td className="date">07.10.2012</td>
      <td className="detials">
        <Dropdown
          options={[
            {
              title: "View detials",
              link: "/view-detials",
            },
            {
              title: "Edit info",
              link: "/edit-info",
            },
            {
              title: "Delete",
              link: "/delete",
            },
          ]}
        />
      </td>
    </TableStyle>
  );
};

export default Table;
