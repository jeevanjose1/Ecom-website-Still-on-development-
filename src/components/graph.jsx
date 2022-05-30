import React from "react";
import styled from "styled-components";
import { numGenerator } from "../helper/numbergenerator";

const Graph = () => {
  const number = numGenerator(10, 60).sort((a, b) => b - a);
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const data = [
    35000, 20006, 14400, 45100, 7800, 5600, 7800, 5222, 21422, 45235, 50042,
    43588,
  ];
  return (
    <GraphStyle>
      <Main>
        <Heading>
          <h1>Monthly Sale</h1>
        </Heading>
        <Content>
          <Numbers>
            {number.map((e, i) => {
              return <p key={i}>{e}k</p>;
            })}
          </Numbers>
          <BarsMonths>
            <Bars>
              {data.map((e, i) => {
                return (
                  <Bar key={i} style={{ height: (e / 1000) * 3.5 }}>
                    <div className="bubble">
                      <p>{Math.round(e / 1000)}k</p>
                    </div>
                  </Bar>
                );
              })}
            </Bars>
            <Months>
              {month.map((e, i) => {
                return <Month key={i}>{e}</Month>;
              })}
            </Months>
          </BarsMonths>
        </Content>
      </Main>
    </GraphStyle>
  );
};
const GraphStyle = styled.div`
  max-width: 50rem;
  height: 40rem;
  @media screen and (max-width: 1520px) {
    width: 40rem;
  }
  @media screen and (max-width: 1167px) {
    width: 30rem;
  }
  @media screen and (max-width: 600px) {
    width: 40rem;
  }
`;
const Main = styled.div`
  /* background-color: white; */
`;
const Heading = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Numbers = styled.div`
  p {
    margin-bottom: 4rem;
    font-size: 1.1rem;
  }
`;
const BarsMonths = styled.div`
  padding: 0 3rem;
  width: 50rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  /* height: 50rem; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Bars = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  align-items: flex-end;
  margin-left: 0.5rem;
  /* justify-content: space-around; */
`;
const Bar = styled.div`
  background-color: #7e9879;

  border-radius: 5px 5px 0 0;
  width: 13px;
  height: 5rem;
  position: relative;
  &:not(:last-child) {
    margin-right: 38px;
  }
  &:hover .bubble {
    display: block;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bubble {
    position: absolute;
    width: 8rem;
    height: 8rem;
    background-color: #6f9176;
    left: 50%;
    top: -60px;
    transform: translate(-50%, -50%) scale(0.2);
    transform-origin: bottom;
    clip-path: polygon(49% 100%, 0 0, 100% 0);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
`;
const Months = styled.div`
  margin-top: 2.6rem;
  width: 50rem;
  display: flex;
`;
const Month = styled.p`
  text-transform: capitalize;
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 2.9rem;
  }
`;

export default Graph;
