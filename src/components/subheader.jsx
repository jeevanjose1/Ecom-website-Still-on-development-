import React from "react";
import styled from "styled-components";
const Subheader = () => {
  return (
    <Header>
      <Heading>
        <h1>Analytics</h1>
        <p>Hello jeevan wellcom back</p>
      </Heading>
      <Live>
        <Sales>
          <h1>42</h1>
          <p>live sales</p>
        </Sales>
        <Visit>
          <h1>150</h1>
          <p>live Visitor</p>
        </Visit>
      </Live>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30rem 0 5rem;
  align-items: center;

  height: 7.5rem;

  background-color: #f1f1f1;
  @media screen and (max-width: 970px) {
    padding: 0 7rem 0 5rem;
  }
`;
const Heading = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: #8b8b8b;
    @media screen and (max-width: 1160px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 970px) {
      font-size: 1.9rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: #8b8b8b;
    @media screen and (max-width: 1160px) {
      font-size: 1rem;
    }
  }
`;
const Live = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: #616161;
    @media screen and (max-width: 970px) {
      font-size: 2.2rem;
    }
  }
  p {
    font-size: 1.5rem;
    @media screen and (max-width: 970px) {
      font-size: 1.2rem;
    }
  }
`;
const Sales = styled.div``;
const Visit = styled.div``;

export default Subheader;
