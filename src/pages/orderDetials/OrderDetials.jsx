import React from "react";
import Header from "./orderDetialsComponents/header/Header.jsx";
import Info from "./orderDetialsComponents/info/Info.jsx";
import Orders from "./orderDetialsComponents/orders/Orders.jsx";
import {
  Container,
  DetialsSection,
  OrderDetialsContainer,
  Title,
} from "./orderDetialsStyles";

const OrderDetials = () => {
  return (
    <OrderDetialsContainer>
      <Container>
        <Title>
          <h1>Order Detials</h1>
        </Title>

        <DetialsSection>
          <Header />
          <Info />
          <Orders />
        </DetialsSection>
      </Container>
    </OrderDetialsContainer>
  );
};

export default OrderDetials;
