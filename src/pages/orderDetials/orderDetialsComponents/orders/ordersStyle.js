import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const OrdersContainer = styled.div`
  padding: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  ${mediaQueries("medium")`
   
   flex-direction: column;

  `}
`;
export const OrderTable = styled.div`
  width: calc(100% - 35%);
  padding: 0 0.5rem;
  text-align: left;
  ${mediaQueries("medium")`
   
   width:100%

  `}
  .orders-table {
    width: 100%;
    border: 1px solid #e6e6e6;
    border-collapse: collapse;
    .end {
      text-align: right;
    }
    thead {
      th {
        padding: 1.2rem 1.6rem;
        font-size: var(--font-size-large);
        font-weight: var(--font-weight-medium);
        opacity: 0.6;
      }
    }

    tbody {
      width: 100%;
    }
  }
`;
export const PaymentInfo = styled.div`
  width: calc(100% - 65%);
  padding: 0 0.5rem;
  ${mediaQueries("medium")`
   
   width:100%

  `}
`;
