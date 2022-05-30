import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries";

export const OrdersStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.div``;
export const Title = styled.div`
  h1 {
    font-size: var(--font-size-xxxxxxxlarge);
    font-weight: var(--font-weight-medium);
  }
  margin-bottom: 2rem;
`;
export const OrderContainer = styled.div`
  display: flex;
`;
export const OrdersSection = styled.div`
  width: 70%;
  background-color: var(--default);
  margin: 0 0.5rem;
  border-radius: 1rem;
  box-shadow: -3px 5px 6px -3px rgba(0, 0, 0, 0.11);
  ${mediaQueries("small")`
 width: 100%;
    `}
`;
export const FilterSection = styled.div`
  background-color: var(--default);
  width: 30%;
  margin: 0 0.5rem;
  border-radius: 1rem;
  box-shadow: -3px 5px 6px -3px rgba(0, 0, 0, 0.11);
  ${mediaQueries("small")`
  display: none;
    `}
`;
