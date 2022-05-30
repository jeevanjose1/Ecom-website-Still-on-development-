import React from "react";
import AddCatogery from "./catogeriesComponents/AddCatogery/AddCatogery.jsx";
import CatogeryList from "./catogeriesComponents/catogeryList/CatogeryList.jsx";
import {
  AddCatogerySection,
  CatogeriesStyle,
  Catogery,
  CatogeryContainer,
  Container,
  Title,
} from "./catogeriesStyle";

const Catogeries = () => {
  return (
    <CatogeriesStyle>
      <Container>
        <Title>
          <h1>Catogeries</h1>
        </Title>

        <CatogeryContainer>
          <AddCatogerySection>
            <AddCatogery />
          </AddCatogerySection>
          <Catogery>
            <CatogeryList />
          </Catogery>
        </CatogeryContainer>
      </Container>
    </CatogeriesStyle>
  );
};

export default Catogeries;
