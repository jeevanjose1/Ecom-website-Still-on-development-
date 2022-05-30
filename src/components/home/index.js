import React from "react";
import styled from "styled-components";
import Detials from "./detials";
import SaleGraph from "../salegraph";

const HomeComponent = () => {
  return (
    <Home>
      <Detials />
      <SaleGraph />
    </Home>
  );
};
const Home = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10rem;
    margin-left: -1rem;
  }
`;
export default HomeComponent;
