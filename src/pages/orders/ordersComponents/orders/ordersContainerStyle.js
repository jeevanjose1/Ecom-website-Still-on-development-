import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const Orders = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.5rem;
  ${mediaQueries("small")`
   flex-direction: column;
    `}
  input {
    padding: 1rem;
    width: 33%;
    ${mediaQueries("medium")`
    width:50%;
    `}
    ${mediaQueries("small")`
    width:100%;
    `}
  }

  .filter {
    width: 40%;
    display: flex;
    ${mediaQueries("medium")`
    width:50%;
    margin-left:1rem;
    `}
    ${mediaQueries("small")`
    width:100%;
    margin-left:0;
    margin-top:1rem;
    `}
  }

  select {
    padding: 1rem;
    width: 50%;
    &:first-child {
      margin-right: 1rem;
    }
  }
`;
export const Container = styled.div``;
export const Head = styled.div`
  padding: 1.5rem;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  opacity: 0.5;
  span {
    font-size: var(--font-size-xlarge);
  }
  .id {
    flex: 0.1;
  }
  .customer-name {
    flex: 0.3;
  }
  .status {
    flex: 0.25;
  }
  .price {
    flex: 0.2;
  }
  .date {
    flex: 0.2;
  }
  .action {
    flex: 0.2;
    display: flex;
    justify-content: flex-end;
  }
`;
export const OrderSection = styled.div``;
