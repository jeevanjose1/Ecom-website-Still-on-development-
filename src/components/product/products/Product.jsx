//native import
import React from "react";

//external import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//internal import
import {
  Catogerys,
  Content,
  Delete,
  Edit,
  Name,
  Options,
  Price,
  Products,
} from "./productStyle";

const Product = () => {
  return (
    <Products>
      <Content>
        <Name>cardomom</Name>
        <Catogerys>spices</Catogerys>
        <Price>10$</Price>
        <Options>
          <Edit>
            <FontAwesomeIcon icon={faEdit} />
          </Edit>
          <Delete>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Delete>
        </Options>
      </Content>
    </Products>
  );
};

export default Product;
