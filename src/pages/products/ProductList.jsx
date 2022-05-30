import React from "react";
import SingleProduct from "./productListComponents/singleProduct/SingleProduct.jsx";
import {
  ProductListStyle,
  Container,
  Title,
  Products,
  Header,
  Product,
} from "./productListStyle.js";
const ProductList = () => {
  return (
    <ProductListStyle>
      <Container>
        <Title>
          <h1>Product List</h1>
        </Title>
        <Products>
          <Header>
            <input className="checkbox" type="checkbox" />
            <select>
              <option value="">All Catogery</option>
              <option value="">All Catogery</option>
              <option value="">All Catogery</option>
            </select>
            <input type="date" />
            <select>
              <option value="">Status</option>
              <option value="">deleed</option>
              <option value="">All Catogery</option>
            </select>
          </Header>
          <Product>
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </Product>
        </Products>
      </Container>
    </ProductListStyle>
  );
};

export default ProductList;
