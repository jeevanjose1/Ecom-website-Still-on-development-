import React from "react";
import { Container, Order, SingleOrderStyle } from "./singleOrderStyle";
import Dropdown from "../../../../../components/dropdown/Dropdown.jsx";

const SingleOrder = () => {
  return (
    <SingleOrderStyle>
      <Container>
        <Order>
          <div className="id">
            <span>452</span>
          </div>
          <div className="customer-name">
            <span>jeevan jose</span>
          </div>
          <div className="status">
            <span>delevered</span>
          </div>
          <div className="price">
            <span>$1200</span>
          </div>
          <div className="date">
            <span>01.2.2018</span>
          </div>
          <div className="action">
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
          </div>
        </Order>
      </Container>
    </SingleOrderStyle>
  );
};

export default SingleOrder;
