import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const TransactionsStyle = styled.div`
  width: 70%;
  padding: 0.7rem 0.7rem;
  ${mediaQueries("large")`
  
  width: 100%;
  
  `}
`;
export const Container = styled.div``;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  .search {
    width: 48%;

    input {
      padding: 0.7rem;
      width: 100%;
    }
  }
  .sort {
    width: 28%;
    select {
      width: 100%;
      padding: 0.7rem;
    }
  }
`;
export const TransactionContainer = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    opacity: 0.5;

    border-bottom: 1px solid #e8e8e8;
    th {
      font-size: var(--font-size-xxlarge);
      font-weight: var(--font-weight-medium);
      ${mediaQueries("large")`
  
  font-size: var(--font-size-xlarge);
  
  `}
      text-align: left;
      padding: 0.8rem;
      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        width: 30%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 20%;
        text-align: right;
      }
    }
  }
  tbody {
    width: 100%;
  }
`;
export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    li {
      height: 4rem;
      button {
        height: 100%;
        padding: 1rem 1.5rem;
        font-size: var(--font-size-xlarge);
      }
    }
  }
`;
