import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const TransactionDetialsContainer = styled.div`
  width: 30%;
  padding: 0.7rem 0.7rem;
  ${mediaQueries("large")`
  
  width: 100%;
  
  `}
`;
export const Container = styled.div`
  background-color: var(--tertiary);
  padding: 1rem;
  h2 {
    font-size: var(--font-size-xxxxlarge);
    font-weight: var(--font-weight-medium);
    margin-bottom: 2rem;
  }
  .detials {
    h3 {
      font-size: var(--font-size-xxlarge);
      font-weight: var(--font-weight-medium);
      margin-bottom: 0.3rem;
    }
    p {
      font-size: var(--font-size-xlarge);
    }
    h4 {
      font-size: var(--font-size-xxxxxlarge);
      font-weight: var(--font-weight-medium);
    }
    .mgb {
      margin-bottom: 1.5rem;
    }

    .items {
      a {
        display: block;
        font-size: var(--font-size-xlarge);
        font-weight: var(--font-weight-medium);
      }
    }
  }
`;
