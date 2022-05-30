import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding: 1.5rem;
  background-color: var(--tertiary);
  border-radius: 0.5rem;
  border: 1px solid #e6e6e6;
  h3 {
    font-size: var(--font-size-xxlarge);
    font-weight: var(--font-weight-medium);
    margin-bottom: 1.5rem;
  }
  .detials {
    p {
      img {
        width: 2.5rem;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
      font-size: var(--font-size-xlarge);
      line-height: 2;
    }
  }
`;
