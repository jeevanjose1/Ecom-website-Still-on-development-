import styled from "styled-components";
import { mediaQueries } from "../../../../../helper/mediaQuries";

export const SingleTransactionsStyle = styled.tr`
  font-size: var(--font-size-xlarge);
  font-weight: var(--font-weight-normal);
  border-bottom: 1px solid #e6e6e6;
  ${mediaQueries("large")`
  
  font-size: var(--font-size-large);
  
  `}
  .icon-text {
    display: flex;
    width: 100%;
    align-items: center;
    img {
      width: 3rem;

      margin-right: 1rem;
      outline: 1px solid #e6e6e6;
    }
  }
  td {
    padding: 1rem;
    &:nth-child(4) {
      text-align: right;
    }
  }
`;
