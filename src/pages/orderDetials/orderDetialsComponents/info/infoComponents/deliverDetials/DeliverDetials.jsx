import React from "react";
import { DeliverDetialsWrapper, Container } from "./deliverDetialsStyle.js";
import { lineBreaker } from "./deliverDetials.js";
const DeliverDetials = ({ Icon, heading, detials }) => {
  return (
    <DeliverDetialsWrapper>
      <Container>
        <div className="icon">
          <Icon fontSize="large" />
        </div>
        <div className="detials">
          <h3 className="heading">{heading}</h3>
          {lineBreaker(detials)}
        </div>
      </Container>
    </DeliverDetialsWrapper>
  );
};

export default DeliverDetials;
