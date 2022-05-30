import React from "react";
import Order from "./ordersComponents/order/Order";
import Payment from "./ordersComponents/payment/Payment";
import {
  Container,
  OrdersContainer,
  OrderTable,
  PaymentInfo,
} from "./ordersStyle";

const Orders = () => {
  return (
    <OrdersContainer>
      <Container>
        <OrderTable>
          <table className="orders-table">
            <thead>
              <tr>
                <th width="40%">Product</th>
                <th width="20%">Unit Price</th>
                <th width="20%">Quantity</th>
                <th className="end" width="20%">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
            </tbody>
          </table>
        </OrderTable>
        <PaymentInfo>
          <Payment />
        </PaymentInfo>
      </Container>
    </OrdersContainer>
  );
};

export default Orders;
