import React from "react";
import {
  Container,
  Header,
  Orders,
  Head,
  OrderSection,
} from "./ordersContainerStyle";
import SingleOrder from "./singleOrder/SingleOrder.jsx";
const OrdersContainer = () => {
  return (
    <Orders>
      <Header>
        <input type="text" placeholder="Search..." />
        <div className="filter">
          <select name="" id="">
            <option value="">Status</option>
          </select>
          <select name="" id="">
            <option value="">show 20</option>
          </select>
        </div>
      </Header>
      <Container>
        <Head>
          <div className="id">
            <span>#ID</span>
          </div>
          <div className="customer-name">
            <span> Name</span>
          </div>
          <div className="status">
            <span>Status</span>
          </div>
          <div className="price">
            <span>price</span>
          </div>
          <div className="date">
            <span>Date</span>
          </div>
          <div className="action">
            <span>Action</span>
          </div>
        </Head>

        <OrderSection>
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
        </OrderSection>
      </Container>
    </Orders>
  );
};

export default OrdersContainer;
