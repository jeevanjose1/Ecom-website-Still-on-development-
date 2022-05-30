import React from "react";
import Filter from "./ordersComponents/filter/Filter.jsx";
import OrdersContainer from "./ordersComponents/orders/OrdersContainer.jsx";
import {
  Container,
  FilterSection,
  OrderContainer,
  OrdersSection,
  OrdersStyle,
  Title,
} from "./ordresStyle";

const Orders = () => {
  return (
    <OrdersStyle>
      <Container>
        <Title>
          <h1>Orders</h1>
        </Title>
        <OrderContainer>
          <OrdersSection>
            <OrdersContainer />
          </OrdersSection>
          <FilterSection>
            <Filter />
          </FilterSection>
        </OrderContainer>
      </Container>
    </OrdersStyle>
  );
};

export default Orders;
