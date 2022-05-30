import React from "react";
import { Link } from "react-router-dom";
import { OrderStyle } from "./orderStyle";

const Order = () => {
  return (
    <OrderStyle>
      <td>
        <Link to="#" className="link">
          <div className="image">
            <img
              src="https://www.ecommerce-admin.com/demo/images/items/1.jpg"
              alt=""
            />
          </div>
          <div className="name">T-shirts</div>
        </Link>
      </td>
      <td>
        <p>$44</p>
      </td>
      <td>
        <p>2</p>
      </td>
      <td className="end">
        <p>$44</p>
      </td>
    </OrderStyle>
  );
};

export default Order;
