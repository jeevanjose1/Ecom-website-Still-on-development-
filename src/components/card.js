import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Active } from "../actions/utilAction";

const Card = () => {
  const dispatch = useDispatch();
  return (
    <CardStyle
      onClick={() => {
        dispatch(Active());
      }}
    >
      <Detials>
        <h1>1200</h1>
        <h2>orders this month</h2>
      </Detials>
    </CardStyle>
  );
};
const CardStyle = styled.div`
  width: 25.8rem;
  @media screen and (max-width: 1520px) {
    width: 20rem;
    height: 14rem;
  }
  @media screen and (max-width: 1167px) {
    width: 16rem;
    height: 13rem;
  }
  height: 16rem;
  background-color: #f0f0f0;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  color: #505050;
  cursor: pointer;
  &:hover {
    background-color: #6d8167;
    color: white;
  }
`;
const Detials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3.5rem;
  @media screen and (max-width: 1167px) {
    margin-left: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    @media screen and (max-width: 1167px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    @media screen and (max-width: 1167px) {
      font-size: 1.2rem;
    }
  }
`;

export default Card;
