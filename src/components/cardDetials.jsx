import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Active } from "../actions/utilAction";
import Graph from "./graph";

const CardDetials = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.util);
  return (
    <CardMain
      style={
        active
          ? { opacity: 1, display: "flex" }
          : { opacity: 0, display: "none" }
      }
    >
      <CardDetial>
        <Graphs>
          <Graph />
        </Graphs>
        <Contents>
          <Single>
            <h1>Cardomom</h1>
            <h2>10/2/2012 10:30 am</h2>
            <h2>Quandity 10</h2>
            <h2>20$</h2>
          </Single>
          <Single>
            <h1>Cardomom</h1>
            <h2>10/2/2012 10:30 am</h2>
            <h2>Quandity 10</h2>
            <h2>20$</h2>
          </Single>
          <Single>
            <h1>Cardomom</h1>
            <h2>10/2/2012 10:30 am</h2>
            <h2>Quandity 10</h2>
            <h2>20$</h2>
          </Single>
          <Single>
            <h1>Cardomom</h1>
            <h2>10/2/2012 10:30 am</h2>
            <h2>Quandity 10</h2>
            <h2>20$</h2>
          </Single>
          <Single>
            <h1>Cardomom</h1>
            <h2>10/2/2012 10:30 am</h2>
            <h2>Quandity 10</h2>
            <h2>20$</h2>
          </Single>
        </Contents>
      </CardDetial>
      <Overlay onClick={() => dispatch(Active())}></Overlay>
    </CardMain>
  );
};

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000014;
  z-index: -1;
`;
const Graphs = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Contents = styled.div`
  width: 90%;
  overflow-y: scroll;
  padding: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Single = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 1.3rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #202020;
  }

  h2 {
    &:nth-child(2) {
      font-size: 1.4rem;
      font-weight: 500;
      color: #585858;
    }
  }
  h2 {
    &:nth-child(3) {
      font-size: 1.4rem;
      font-weight: 500;
      color: #585858;
    }
  }
  h2 {
    &:nth-child(4) {
      font-size: 1.7rem;
      font-weight: 600;
      color: #585858;
    }
  }
`;

const CardDetial = styled.div`
  width: 111.2rem;
  height: 55.5rem;
  background-color: white;
  padding: 3rem;
  display: flex;

  justify-content: space-around;
  @media screen and (max-width: 600px) {
    width: 45rem;
    height: 60rem;
    overflow-y: scroll;
    flex-wrap: wrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const CardMain = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  /* transform: translate(-18.2%, -29%); */
  background-color: #0000005c;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  /* transition: all 0.5s ease; */
  /* transition-delay: 1s; */
`;
export default CardDetials;
