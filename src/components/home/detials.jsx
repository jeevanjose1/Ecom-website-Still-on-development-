import React from "react";

import styled from "styled-components";
import Card from "../card";

const Detials = () => {
  return (
    <>
      <Detial>
        <Main>
          <Heading>
            <h3>This Month Sale</h3>
            <h1>$1586</h1>
          </Heading>
          <MainContent>
            <Content>
              <Card ClassName="order" />
              <Card ClassName="traffic" />
              <Card ClassName="user" />
              <Card ClassName="visitor" />
            </Content>
          </MainContent>
        </Main>

        <Line></Line>
      </Detial>
    </>
  );
};
const Detial = styled.div`
  width: 50%;
  position: relative;
`;
const Line = styled.div`
  height: 84vh;
  width: 0.02rem;
  background-color: #00000040;
  position: absolute;
  top: -73px;
  z-index: -1;
  right: 0;
  @media screen and (max-width: 750px) {
   display: none;
    
`;
const Main = styled.div`
  /* height: 100%; */
`;
const Heading = styled.div`
  padding: 0 2rem 2rem;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    color: #555555;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #555555;
  }
`;

const MainContent = styled.div`
  /* display: flex; */
  padding: 0rem 2rem;
  align-items: center;
  width: 100%;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 25.8rem 25.8rem;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  gap: 40px 40px;
  .order {
    grid-area: 1 / 1 / 2 / 2;
  }
  .traffic {
    grid-area: 1 / 2 / 2 / 3;
  }
  .user {
    grid-area: 2 / 1 / 3 / 2;
  }
  .visitor {
    grid-area: 2 / 2 / 3 / 3;
  }
  @media screen and (max-width: 1520px) {
    grid-template-columns: 20rem 20rem;
    gap: 20px 20px;
  }
  @media screen and (max-width: 1167px) {
    grid-template-columns: 16rem 16rem;
    gap: 20px 20px;
  }
`;

export default Detials;
