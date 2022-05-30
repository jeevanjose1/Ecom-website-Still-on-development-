import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries";

export const TransactionStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.div``;
export const Title = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: var(--font-size-xxxxxxxlarge);
    font-weight: var(--font-weight-medium);
  }
`;
export const TransactionsContainer = styled.div`
  background-color: var(--default);
  display: flex;
  padding: 1.5rem;
  ${mediaQueries("large")`
  
  flex-direction: column;
  
  `}
`;
