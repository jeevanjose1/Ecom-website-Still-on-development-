import { AccountCircle, LocalShipping, LocationOn } from "@mui/icons-material";
import React from "react";
import DeliverDetials from "./infoComponents/deliverDetials/DeliverDetials.jsx";
import { Container, InfoContainer } from "./infoStyle";

const Info = () => {
  return (
    <InfoContainer>
      <Container>
        <DeliverDetials
          detials="jeevan jose | jeevanjose@gmail.com  | 9497012235"
          heading="Customer"
          Icon={AccountCircle}
        />
        <DeliverDetials
          detials="Shipping: Fargo express | Pay method: card | Status: new"
          heading="Order info"
          Icon={LocalShipping}
        />
        <DeliverDetials
          detials="City: Tashkent, Uzbekistan | Block A, House 123, Floor 2  | Po Box 10000"
          heading="Deliver to"
          Icon={LocationOn}
        />
      </Container>
    </InfoContainer>
  );
};

export default Info;
