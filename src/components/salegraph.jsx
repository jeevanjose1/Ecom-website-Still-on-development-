import React from "react";
import styled from "styled-components";
import Graph from "./graph";

const SaleGraph = () => {
  return (
    <Graphs>
      <Graph />
    </Graphs>
  );
};
const Graphs = styled.div`
  width: 50%;
  height: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SaleGraph;
