import React from "react";
import { MonetizationOn } from "@mui/icons-material";
import { Card, Container, Detials, Icon } from "./cardStyle";

const Cards = ({ title }) => {
  return (
    <Card>
      <Container>
        <Icon>
          <MonetizationOn sx={{ fontSize: 25 }} />
        </Icon>
        <Detials>
          <h3 className="title">{title}</h3>
          <h4 className="sales">$5115481</h4>
        </Detials>
      </Container>
    </Card>
  );
};

export default Cards;
