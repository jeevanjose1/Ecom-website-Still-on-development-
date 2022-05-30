import React from "react";
import Dropdown from "../../../../components/dropdown/Dropdown.jsx";
import {
  Action,
  Check,
  Container,
  Date,
  Name,
  Price,
  SingleProductStyle,
  Status,
} from "./SingleProductStyle";

const SingleProduct = () => {
  return (
    <SingleProductStyle>
      <Container>
        <Check>
          <input type="checkbox" />
        </Check>
        <Name>
          <div className="product-img">
            <img
              src="https://www.ecommerce-admin.com/demo/images/items/1.jpg"
              alt=""
            />
          </div>
          <div className="product-name">
            <h4>T-shirt for men medium size</h4>
          </div>
        </Name>
        <Price>
          <span>$36.5</span>
        </Price>
        <Status>
          <span>Active</span>
        </Status>
        <Date>
          <span>04.12.2018</span>
        </Date>
        <Action>
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
        </Action>
      </Container>
    </SingleProductStyle>
  );
};

export default SingleProduct;
